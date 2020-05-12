import React from 'react'

import CheckInCard from 'components/card/CheckInCard'
import CheckInCardWFH from 'components/card/CheckInCard-WFH'
import ReportFilter from 'components/filter/ReportFilter'

import './CheckInList.scss'

class CheckInList extends React.Component {
  render() {
    return (
      <div className='checkin-report'>
        <h2>รายงาน</h2>
        <div className='border' />

        <ReportFilter />

        <div className='checkin-list'>
          <CheckInCard
            imgSrc={require('../../images/workout.png')}
            checkinType='ปฏิบัติงานนอกสถานที่'
            projName='โปรเจค A'
            path='/Report/Report-WFO'
          />

          <CheckInCardWFH
            imgSrc={require('../../images/workfromhome.png')}
            checkinType='Work From Home'
            projName='โปรเจค B'
            path='/Report/Report-WFH'
          />
        </div>
      </div>
    )
  }
}

export default CheckInList
