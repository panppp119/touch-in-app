import React from 'react'

import CheckInCard from 'components/card/CheckInCard'
import ReportFilter from 'components/filter/ReportFilter'

import './CheckInList.scss'

class CheckInList extends React.Component {
  render() {
    return (
      <div className='checkin-report'>
        <h2>Check-In Report</h2>

        <ReportFilter />

        <div className='checkin-list'>
          <CheckInCard
            imgSrc={require('../../../img/workout.png')}
            checkinType='ปฏิบัติงานนอกสถานที่'
            projName='โปรเจค A'
            path='/Workoutside'
          />

          <CheckInCard
            imgSrc={require('../../../img/workout.png')}
            checkinType=' Work From Home'
            projName='โปรเจค B'
            path='/Workfromhome'
          />
        </div>
      </div>
    )
  }
}

export default CheckInList
