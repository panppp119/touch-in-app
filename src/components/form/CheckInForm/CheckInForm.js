import React, { Component } from 'react'
import moment from 'moment'
import * as firebase from 'firebase/app'
import { GoCloudUpload, GoDeviceCamera, GoTrashcan } from 'react-icons/go'
import EXIF from 'exif-js'
import isEmpty from 'lodash.isempty';

// import Container from 'components/layout/Container'
// import { storage } from 'config/firebaseConfig.js'

import './CheckInForm.scss'
import { Alert } from 'antd'

/*const upload_img = document.getElementById("upload");
const push_img = document.getElementById("push");*/

export class CheckInForm extends Component {
  state = {
    images: [],
  }

  // async handleUpload(e) {
  //   const images = this.state.images
  //   const filesUpload = e.target.files

  //   this.setState({ value: e.target.value })

  //   const allImages = Object.keys(filesUpload).map(async (key) => {
  //     return new Promise((resolve, reject) => {
  //       let reader = new FileReader()
  //       reader.readAsDataURL(filesUpload[key])
  //       reader.onload = () => {
  //         let dataURI = reader.result
  //         let base64 = dataURI.replace(/^[^,]+,/, '')
  //         let byteCharacters = atob(base64)
  //         let byteNumbers = new Uint8Array(byteCharacters.length)
  //         for (var i = 0; i < byteCharacters.length; i++) {
  //           byteNumbers[i] = byteCharacters.charCodeAt(i)
  //         }

  //         let blob = new Blob([byteNumbers], { type: 'image/jpeg' })
  //         let urlCreator = window.URL || window.webkitURL
  //         let imageUrl = urlCreator.createObjectURL(blob)
  //         let imageDetail = {
  //           url: imageUrl,
  //           fileUpload: filesUpload[key],
  //         }
  //         resolve(imageDetail)
  //       }
  //     })
  //   })
  //   const data = await Promise.all(allImages)

  //   this.setState({
  //     images: images.concat(data),
  //   })
  // }

 /* alertSuccess(){
    alert("บันทึกสำเร็จ")
  }*/

  submitCheckIn = () => {
    const { images } = this.state
    const storageRef = firebase.storage().ref('')
    alert('บันทึกสำเร็จ')
    images.map((image) => {
      const imageType = image.raw.type.split('/')[1]
      const datetime = moment(image.datetime).unix()

      return storageRef
      
        .child(
          `/check-in/checkin_${datetime}.${
            imageType === 'jpeg' ? 'jpg' : imageType
          }`,
        )
        .put(image.raw)
        .then((snapshot) => {
          console.log('uploaded', snapshot)
        })
        
    })
  

    // const uploadAllImage = firebase.database().ref('data')(async (image) => {
    //   return new Promise((resolve, reject) => {
    //     let formData = new FormData()
    //     let file = image.fileUpload
    //     formData.append('image', file)
    //     let xhr = new XMLHttpRequest()
    //     xhr.onreadystatechange = function () {
    //       if (xhr.readyState === 4) {
    //         const response = JSON.parse(xhr.response)
    //         if (response.result === true) {
    //           delete image.fileUpload
    //           resolve({ ...image, url: response.data.url })
    //         }
    //         reject(image)
    //       }
    //     }
    //     xhr.open('post', '/upload', true)
    //     xhr.send(formData)
    //   })
    // })

    // await Promise.all(uploadAllImage)
    // this.setState({ loading: false, images: [], value: '' })
  }

  renderImages() {
    // const mapKey = '5d4d47a40dbeaa10a0072cdc2e0e9622'
    const { images } = this.state

    if (images.length > 0) {
      return images.map((image, index) => {
        return (
          <div className='upload-card' key={index}>
            <div className='upload-image'>
              <img
                className='CheckInForm'
                src={image.preview}
                width={200}
                alt=''
              />
              <br />
            </div>

            <div className='remove-image'>
              <GoTrashcan
                onClick={() => {
                  images.splice(index, 1)
                  this.setState({ images })
                }}
              />
            </div>

            <div className='card-detail'>
              <p>วัน, เวลา : {image.datetime}</p>
              <div className='border-detail' />
              
              <p>
                สถานที่ :
                <span style={{ margin: '0 10px' }}>{image.location}</span>
                {image.map && image.map !=='' && (
                <a href={image.map} target='_blank' rel='noopener noreferrer'>
                  Map
                </a>
                )}
              </p>
            </div>
            {/* <button type='button' className='btn btn-danger'>
              ยกเลิก
            </button>
            <button
              type='button'
              className='btn btn-success'
              onClick={this.submitUpload.bind(this)}
              disabled={this.state.loading === true ? 'disabled' : ''}
            >
              {this.state.loading === true ? 'กำลังบันทึก...' : 'บันทึก'}
            </button>

            <button type='button' className='btn btn-primary'>
              รายละเอียด
            </button> */}
          </div>
        )
      })
    }
  }

  CheckInForms = () => {
    document.getElementById('upload').click()
    document.getElementById('upload').onchange = (e) => {
      const files = Object.keys(e.target.files) || []
      let images = []

      return files.map((fileId) => {
        const url = URL.createObjectURL(e.target.files[fileId])
        const comp = this
        const file = e.target.files[fileId]

        return EXIF.getData(e.target.files[fileId], function () {
          let exifData = EXIF.getAllTags(this)

          console.log(file)
   try{
          if(!isEmpty(exifData)) {
            const GPSLat = exifData.GPSLatitude || []
            const GPSLng = exifData.GPSLongitude || []
            let latArr = GPSLat.map((item) => item.numerator) || []
            let lngArr = GPSLng.map((item) => item.numerator) || []
            let latChar = exifData.GPSLatitudeRef
            let lngChar = exifData.GPSLongitudeRef

            let lat = `${latArr[0]}° ${latArr[1]}' ${
              latArr[2] / 100
            }" ${latChar}`
            let lng = `${lngArr[0]}° ${lngArr[1]}' ${
              lngArr[2] / 100
            }" ${lngChar}`

            let location =
              GPSLat.length > 0 ? `${lat}, ${lng}` : 'Location Not Found!'
              
      
            
            let map =
              GPSLat.length > 0
                ? `https://www.google.com/maps/place/${location
                    .split(', ')[0]
                    .split(' ')
                    .join('')}+${location.split(', ')[1].split(' ').join('')}`
                : ''

            let datetime =
              GPSLat.length > 0
                ? `${exifData.DateTime.split(' ')[0].split(':').join('/')} ${
                    exifData.DateTime.split(' ')[1]
                  }`
                : moment(file.lastModified).format('YYYY/MM/DD HH:mm:ss')

            images.push({
              raw: file,
              preview: url,
              location,
              map,
              datetime,
            })
          } 
          else 
          {
           
           images.push({
              
           location: 'No exif data found in image.',
              raw: file,
              preview: url,
              datetime : moment(file.lastModified).format('DD/MM/YYYY, HH:mm')
              
            })
      


          }
        }
        catch(ex){
          console.log('console.log ' , exifData.DateTime)
          }

          comp.setState({ images })
        })
      })
    }
  }

  // getImageLocation = (file) => {
  //   EXIF.getData(file, function () {
  //     var exifData = EXIF.getAllTags(this)

  //     if (exifData) {
  //       const GPSLat = exifData.GPSLatitude || []
  //       const GPSLng = exifData.GPSLongtitude || []
  //       let latArr = GPSLat.map((item) => item.numerator) || []
  //       let lngArr = GPSLng.map((item) => item.numerator) || []
  //       let latChar = exifData.GPSLatitudeRef
  //       let lngChar = exifData.GPSLongtitudeRef

  //       let lat = `${latArr[0]} ${latArr[1]}' ${latArr[2] / 100}" ${latChar}`
  //       let lng = `${lngArr[0]} ${lngArr[1]}' ${lngArr[2] / 100}" ${lngChar}`

  //       let location =
  //         GPSLat.length > 0 ? `${lat}, ${lng}` : 'Location Not Found!'

  //       return location
  //     } else {
  //       return 'No exif data found in image.'
  //     }
  //   })
  // }

  render() {
    return (
      <div className='checkin-form'>
        <div className='form-field center'>
          <label>Select Check-In Type</label>
          <select>
            <option value='a'>Check-In Type 1</option>
            <option value='a'>Check-In Type 2</option>
          </select>
        </div>

        <div className='form-group'>
          <div className='form-field'>
            <label>Camera</label>
            <GoDeviceCamera />
          </div>

          <div className='form-field'>
            <label>Upload Image</label>
            <input
              id='upload'
              type='file'
              accept='image/*'
              multiple
              style={{ display: 'none' }}
            />
            <GoCloudUpload
              className='upload-image'
              onClick={this.CheckInForms}
            />
          </div>
        </div>

        {this.renderImages()}

        {/* <div className='form-checkin'>
          <input
            className=''
            id='upload'
            type='file'
            name='uploadAwsS3'
            onChange={this.handleUpload.bind(this)}
            accept='image/*'
            value={this.state.value}
            multiple
          />

          <div className='row'>
            <div id='showPreviewUpload' className='img-size'>
              {this.renderImages()}
            </div>
          </div>
        </div> */}
        <div className='actions'>
          <button className='cancel'>Cancel</button>
          <button className='submit' onClick={this.submitCheckIn}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default CheckInForm
