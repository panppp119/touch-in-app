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
          <div className='group'>
            <div className='group2' />
            <div className='font'>Work From Home</div>
          </div>
          <div className='projectgroup'>
            <div className='projectgroup2' />
            <div className='fontproject'>โปรเจ็ค A</div>
          </div>
          <div className='workoutdetail2'>
            สถานที่
            <div className='linedetail' />
            ตำบล
            <div className='linedetail' />
            อำเภอ
            <div className='linedetail' />
            จังหวัด
            <div className='linedetail' />
            เวลา
            <div className='linedetail' />
            วันที่
            <div className='linedetail' />
            พิกัด
            <div className='linedetail' />
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
