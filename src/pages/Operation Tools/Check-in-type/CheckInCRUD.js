import React from 'react'
import moment from 'moment'

import CheckInCard from '../../../components/card/CheckInCard/index'
import './CheckInCRUD.scss'
import { Link } from 'react-router-dom'

class CheckInCRUD extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
  }

  render() {
    return (
      <div className='profile-history'>
        <div className='header'>
          <h5>ประวัติการเช็คอิน</h5>
          <div className='col-4'>{this.state.date}</div>
          <Link to='/ImportCheckIn'>
            <div> 
          <img className="importData" src={require('../../../images/plus.png')} />
          </div>
          </Link>
        </div>

        <div className='history-list'>
          <CheckInCard
            imgSrc={require('../../../images/workout.png')}
            checkinType='ปฏิบัติงานนอกสถานที่'
            projName='โปรเจค A'
            path='/Workoutside'
          />

          <CheckInCard
            imgSrc={require('../../../images/workfromhome.png')}
            checkinType=' Work From Home'
            projName='โปรเจค B'
            path='/Workfromhome'
          />
        </div>
      </div>
    )
  }
}

CheckInCRUD.defaultProps = {}
CheckInCRUD.propTypes = {}

export default CheckInCRUD
