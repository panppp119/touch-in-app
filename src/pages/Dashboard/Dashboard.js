import React from 'react'

import './Dashboard.scss'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
      <h3 className="row">Work From Home Page</h3>
      <div className="row">
        <h5>ประวัติการเช็คอิน</h5>
          <div className="col-2">
           {this.state.date} 
            </div>           
        </div>
        <img  className="search"  src={require('../../img/search-logo.png')} />  
        <div className="border" />
  
      
        <div className="sumgroup2">
        <div className="group">
          <div className="group2"/>
          <div className="font">
          Work From Home
          </div>
        </div>
        <div className="projectgroup">
        <div className="projectgroup2"/>
        <div className="fontproject">
          โปรเจ็ค A
        </div>
        </div>
        <div className="workoutdetail">
     
          สถานที่ 
          <div className="linedetail"/>
          ตำบล 
          <div className="linedetail"/>
          อำเภอ 
          <div className="linedetail"/>
          จังหวัด 
          <div className="linedetail"/>
          เวลา 
          <div className="linedetail"/>
          วันที่ 
          <div className="linedetail"/>
          พิกัด 
          <div className="linedetail"/>
          <div className="workcard"/>

        </div>
        </div>
    
  
      </div>
    )
  }
}

Dashboard.defaultProps = {}

Dashboard.propTypes = {}

export default Dashboard
