import React from 'react'
import './projects.scss'
import { Link } from 'react-router-dom'
class projects extends React.Component {
  render() {
    return(
        <div>
        <div className="row">
        <h5>Import Project Page</h5>
          <div className="col-2">
          
            </div>           
        </div>
        <img  className="search"  src={require('../../../img/import.png')} />  
        <div className="border" />
  
        <div className="gradient">
              <img  className="image "  src={require('../../../img/project.png')} />
              
              <div className="work-project"> ไอดี 0001
              <p>โปรเจค A</p>
              </div>
              <div className="project"> สถานะการทำงาน : กำลังทำงาน 
              
              </div>
        </div>
    
  
        <div className="gradient2">
              <img  className="image "  src={require('../../../img/project.png')} />
              <div className="work-project"> ไอดี 0002
              <p>โปรเจค B</p>
              </div>
              <div className="project"> สถานะการทำงาน : กำลังทำงาน
             
              </div>
        </div>

        <div className="gradient2">
              <img  className="image "  src={require('../../../img/project.png')} />
              <div className="work-project"> ไอดี 0003
              <p>โปรเจค C</p>
              </div>
              <div className="project"> สถานะการทำงาน : กำลังทำงาน
             
              </div>
        </div>
      
  
      </div>
    )
  }
}
projects.defaultProps = {}
projects.propTypes = {}
export default projects
