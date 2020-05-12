import React, { Component } from 'react'
import Container from 'components/layout/Container'

import './CheckIn.scss'

import CheckInForm from 'components/form/CheckInForm'

// const uploadImage = async (file) => {
//   const formData = new FormData()
//   formData.append('file', file)
// }
export class Form extends Component {
  render() {
    return (
      <Container>
        <div className='checkin'>
          <h2>Check-In</h2>

          <CheckInForm />
        </div>
      </Container>
    )
  }
}

export default Form
