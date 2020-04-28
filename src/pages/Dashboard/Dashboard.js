import React from 'react'
import './Dashboard.scss'


var FontAwesome = require('react-fontawesome');

class Dashboard extends React.Component {

  constructor() {
    super();

    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
        date: date
    };
}
  render() {
    
    return(
    <div>
    <h3 className="row">Dashboard Page</h3>
      <div className="row">
      <h5>ประวัติการเช็คอิน</h5>
      
        <div className="col-2">
          <FontAwesome name='calendar'  />{this.state.date} 
          </div>     
          
      </div>
      <img  className="search"  src={require('../../img/search-logo.png')} />  
      <div className="border" />
      <div className="gradient">
            <img  className="image "  src={require('../../img/workout.png')} />
            <div className="work-project"> ปฏิบัติงานนอกสถานที่ 
            <p>โปรเจค A</p>
            </div>
            <div className="project"> เวลา 
            <p>สถานที่ </p>
            </div>
          
      </div>
      <div className="gradient2">
            <img  className="image "  src={require('../../img/workfromhome.png')} />
            <div className="work-project"> Work From Home
            <p>โปรเจค B</p>
            </div>
            <div className="project"> เวลา 
            <p>สถานที่ </p>
            </div>
      </div>


    </div>
    ) 
  }
}

Dashboard.defaultProps = {}

Dashboard.propTypes = {}

export default Dashboard
