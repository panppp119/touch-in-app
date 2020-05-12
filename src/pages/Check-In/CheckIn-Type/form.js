import React, { Component } from 'react'
import Container from 'components/layout/Container'
import './form.scss'
import { BsGeoAlt } from 'react-icons/bs'
/*import { BsDownload } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";*/

import Camera from '../../../components/Camera/Camera'
import UploadImage from '../../../components/upload/UploadImage/UploadImage'

const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
}
export class Form extends Component {
  render() {
    return (
      <Container>
        <div className='form-checkin'>
          <div className='text-title'>
            <h2>Work From Home</h2>
          </div>
          <div className='card-icon'>
            <div className='icon'>
              <Camera sendFile={uploadImage} />
            </div>
            <div className='icon'>
              <UploadImage />
            </div>
            <div className='icon'>
              <BsGeoAlt />
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Form
