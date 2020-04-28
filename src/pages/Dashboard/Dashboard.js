import React from 'react'
import './Dashboard.scss'
import { Link ,Route,Switch} from 'react-router-dom'
import Workoutside from '../Workoutside/Workoutside.js'
import Workfromhome from '../Workfromhome/Workfromhome.js'


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
         {this.state.date} 
          </div>     
          
      </div>
      <img  className="search"  src={require('../../img/search-logo.png')} />  
      <div className="border" />

      <Link to="/Workoutside">
      <div className="gradient">
            <img  className="image "  src={require('../../img/workout.png')} />
            <div className="work-project"> ปฏิบัติงานนอกสถานที่ 
            <p>โปรเจค A</p>
            </div>
            <div className="project"> เวลา 
            <p>สถานที่ </p>
            </div>
          
      </div>
      </Link>
      <Link to="/Workfromhome">
      <div className="gradient2">
            <img  className="image "  src={require('../../img/workfromhome.png')} />
            <div className="work-project"> Work From Home
            <p>โปรเจค B</p>
            </div>
            <div className="project"> เวลา 
            <p>สถานที่ </p>
            </div>
      </div>
      </Link>
 
          <Switch>   <Route   path="/Workoutside" component={Workoutside} />
              <Route  path="/Workfromhome" component={Workfromhome} /></Switch> 
    </div>
    ) 
  }
}

Dashboard.defaultProps = {}

Dashboard.propTypes = {}

export default Dashboard
