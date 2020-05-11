import React from 'react'
import moment from 'moment'

import CheckInCard from 'components/card/CheckInCard'
import './ProfileHistory.scss'

class ProfileHistory extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
  }

  render() {
    return (
      <div className='profile-history'>
        <div className='header'>
          <h5>ประวัติการเช็คอิน</h5>
          <div className='col-4'>{this.state.date}</div>
        </div>

        <div className='history-list'>
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

ProfileHistory.defaultProps = {}
ProfileHistory.propTypes = {}

export default ProfileHistory
