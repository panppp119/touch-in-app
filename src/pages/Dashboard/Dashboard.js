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
         
            </div>           
        </div>
        <img  className="search"  src={require('../../images/search-logo.png')} />  
        <div className="border" />
  
      
      
    
  
      </div>
    )
  }
}

Dashboard.defaultProps = {}

Dashboard.propTypes = {}

export default Dashboard
