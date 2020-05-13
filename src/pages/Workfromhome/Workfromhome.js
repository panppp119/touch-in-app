import React from 'react'

import './Workfromhome.scss'

class Workfromhome extends React.Component {
  constructor() {
    super()
    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate()
    this.state = {
      date: date,
    }
  }
  render() {
    return (
      <div className='work-from-home'>
        <h3 className='row'>Work From Home Page</h3>
        <div className='row'>
          <h5>ประวัติการเช็คอิน</h5>
          <div className='col-4'>{this.state.date}</div>
        </div>

        <div className='sumgroup2'>
          <div className='group5'>
            <div className='group6' />
            <div className='font2'>Work From Home</div>
          </div>
          <div className='projectgroup3'>
            <div className='projectgroup4' />
            <div className='fontproject2'>โปรเจ็ค A</div>
          </div>
          <div className='workoutdetail3'>
            สถานที่
            <div className='linedetail2' />
            ตำบล
            <div className='linedetail2' />
            อำเภอ
            <div className='linedetail2' />
            จังหวัด
            <div className='linedetail2' />
            เวลา
            <div className='linedetail2' />
            วันที่
            <div className='linedetail2' />
            พิกัด
            <div className='linedetail2' />
            <div className='workcard' />
          </div>
        </div>
      </div>
    )
  }
}

Workfromhome.defaultProps = {}

Workfromhome.propTypes = {}

export default Workfromhome
