import React from 'react'
import './Workoutside.scss'


class Workoutside extends React.Component {
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
    <h3 className="row">Workoutside Page</h3>
    <div className="row">
      <h5>ประวัติการเช็คอิน</h5>
        <div className="col-2">
         {this.state.date} 
          </div>           
      </div>
      <img  className="search"  src={require('../../img/search-logo.png')} />  
      <div className="border" />

      <div className="sumgroup">
        
      <div className="group">
        <div className="group2"/>
        <div className="font">
        ปฏิบัติงานนอกสถานที่ จุดเริ่มต้น
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
        <div className="card1"/>
        <div className="card2"/>
        <div className="card3"/>
      </div>

      <div className="group">
        <div className="group2"/>
        <div className="font">
        ปฏิบัติงานนอกสถานที่ จุดสิ้นสุด
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
        <div className="card1"/>
        <div className="card2"/>
        <div className="card3"/>
      </div>
      </div>

    </div>
    ) 
  }
}

Workoutside.defaultProps = {}

Workoutside.propTypes = {}

export default Workoutside
