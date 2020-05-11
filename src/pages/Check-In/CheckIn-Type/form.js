import React, { Component } from 'react'
import Container from 'components/layout/Container'
import './form.scss'
import { BsGeoAlt } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import '../../../components/api/map.css';
import { longdo, map, LongdoMap } from '../../../components/api/LongdoMap';
import moment from 'moment'

export class Form extends Component {

    constructor () {
        super()
    
        this.state = {
          images: [],
          loading: false,
          value: '',
          
        }
        
      }
      initMap(){
        map.Layers.setBase(longdo.Layers.GRAY);
      }
    
      async handleUpload (e) {
        const images = this.state.images
        const filesUpload = e.target.files
        this.setState({value: e.target.value})
        const allImages = Object.keys(filesUpload).map(async key => {
          return new Promise((resolve, reject) => {
            let reader = new FileReader()
              reader.readAsDataURL(filesUpload[key])
              reader.onload = () => {
                let dataURI = reader.result
                let base64 = dataURI.replace(/^[^,]+,/, '')
                let byteCharacters = atob(base64)
                let byteNumbers = new Uint8Array(byteCharacters.length)
                for (var i = 0; i < byteCharacters.length; i++) {
                  byteNumbers[i] = byteCharacters.charCodeAt(i)
                }
                let blob = new Blob([byteNumbers], { type: 'image/jpeg'
              })
              let urlCreator = window.URL || window.webkitURL
              let imageUrl = urlCreator.createObjectURL(blob)
              let imageDetail = {
                url: imageUrl,
                fileUpload: filesUpload[key]
              }
              resolve(imageDetail)
            }
          })
        })
        const data = await Promise.all(allImages)
        this.setState({ images: images.concat(data) })
      }
      componentWillMount(){
      
        const timestamp = Date.now();
        console.log(new Intl.DateTimeFormat(
          'en-US', 
          {year: 'numeric', 
          month: '2-digit',
          day: '2-digit', 
          hour: '2-digit', 
          minute: '2-digit',
           second: '2-digit'}).format(timestamp));
      }
      renderImages () {
        const mapKey = '5d4d47a40dbeaa10a0072cdc2e0e9622'
        const { images } = this.state
        if (this.state.images.length > 0) {
          return this.state.images.map((image, index) => {
            return (
              
              <div key={image.url}>
                <img src={image.url} width={200} />
                <br/>
                <button
                  onClick={() => {
                    images.splice(index, 1)
                    this.setState({images})
                  }}
                >
                  ลบ
                </button>
                <h5>{moment(this.state.timestamp).format('DD/MM/YYYY, HH:mm')}</h5>
                <div className='map'>
                <LongdoMap  id="longdo-map"mapKey={mapKey} callback={this.initMap} /></div>
              </div>
            )
          })
        }
    
      }
      async submitUpload () {
        if (this.state.images.length < 1) {
          console.log('กรุณาอัพโหลดรูปภาพก่อนนะจ๊ะ')
          return false
        }
        this.setState({loading: true})
        const uploadAllImage = this.state.images.map(async image => {
          return new Promise((resolve, reject) => {
            let formData = new FormData()
            let file = image.fileUpload
            formData.append('image', file)
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                const response = JSON.parse(xhr.response)
                if (response.result === true) {
                  delete image.fileUpload
                  resolve({...image, url: response.data.url})
                }
                reject(image)
              }
            }
            xhr.open('post', '/upload', true)
            xhr.send(formData)
          })
        })
        await Promise.all(uploadAllImage)
        this.setState({loading: false, images: [], value: ''})
      }    
    render() {
        return (
            <Container>
                <div className='form-checkin'>
                    <div className='text-title'>
                        <h2>Work From Home</h2>
                    </div>
                    <div className='card-icon'>
                    <div className='icon'>
                            <BsDownload />
                        </div>

                        <div className='icon'>
                            <BsCamera />
                        </div>

                        <div className='icon'>
                            <BsGeoAlt />
                        </div>
                    </div>
                       
                    <div className='card-img' />
                    <button type="button" className='btn btn-danger'>ลบ</button>
                    <div className="card-detail">
                        <p>เวลา </p>
                        <div className="border-detail" />
                        <p>สถานที่ </p>
                    </div>
                    <button type="button" className='btn btn-danger'>ยกเลิก</button>
                    <button type="button" className='btn btn-success'>บันทึก</button>
                    <button type="button" className='btn btn-primary'>รายละเอียด</button>
                </div>
            </Container>
        )
    }
}

export default Form
