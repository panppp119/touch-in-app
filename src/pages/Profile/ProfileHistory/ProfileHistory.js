import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import './ProfileHistory.scss'

class ProfileHistory extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
  }

  render() {
    return (
      <div className='profile-history'>
        <h5>ประวัติการเช็คอิน</h5>
        <div className='col-4'>{this.state.date}</div>
        <img
          className='search'
          src={require('../../../img/search-logo.png')}
          alt=''
        />
        <div className='border' />
        <Link to='/Workoutside'>
          <div className='gradient'>
            <img
              className='image '
              src={require('../../../img/workout.png')}
              alt=''
            />
            <div className='work-project'>
              {' '}
              ปฏิบัติงานนอกสถานที่
              <p>โปรเจค A</p>
            </div>
            <div className='project'>
              {' '}
              เวลา
              <p>สถานที่ </p>
            </div>
          </div>
        </Link>

        <Link to='/Workfromhome'>
          <div className='gradient2'>
            <img
              className='image '
              src={require('../../../img/workfromhome.png')}
              alt=''
            />
            <div className='work-project'>
              {' '}
              Work From Home
              <p>โปรเจค B</p>
            </div>
            <div className='project'>
              {' '}
              เวลา
              <p>สถานที่ </p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

ProfileHistory.defaultProps = {}
ProfileHistory.propTypes = {}

export default ProfileHistory
