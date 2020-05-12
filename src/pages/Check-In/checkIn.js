import React from 'react'
import './checkIn.scss'
import { Link } from 'react-router-dom'
//import moment from 'moment'
class checkIn extends React.Component {
  /* componentWillMount(){
  
    const timestamp = Date.now();
    console.log(new Intl.DateTimeFormat(
      'en-US', 
      {year: 'numeric', 
      month: '2-digit',
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit',
       second: '2-digit'}).format(timestamp));
       //<h5>{moment(this.state.timestamp).format('DD/MM/YYYY, HH:mm')}</h5>
  }*/
  render() {
    return (
      <div>
        <div className='row'>
          <h5>Check-In Page</h5>
          <div className='col-2'></div>
        </div>

        <div className='border' />
        <br />
        <Link to='/Workfromhome_type'>
          <div className='workfromhome1'>
            <img
              className='home'
              src={require('../../images/home.png')}
              alt=''
            />
            <div className='d1'>
              <h3>Work From Home</h3>
            </div>
          </div>
        </Link>
        <Link>
          <div className='workfromhome2'>
            <img
              className='workout'
              src={require('../../images/workout.png')}
              alt=''
            />
            <div className='d2'>
              <h3>Work Outside</h3>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
checkIn.defaultProps = {}
checkIn.propTypes = {}
export default checkIn
