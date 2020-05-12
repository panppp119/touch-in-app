import React from 'react'
import './projects.scss'
//import { Link } from 'react-router-dom'
import axios from 'axios'
//import * as XLSX from 'xlsx';

class projects extends React.Component {
  state = {
    file: null,
  }

  handleFile(e) {
    let file = e.target.files
    this.setState({ file: file })
  }
  handleUpload(e) {
    let file = this.state.file
    let formdata = new FormData()

    formdata.append('xlsx', file)

    axios({
      url: `/some/api`,
      method: 'POST',
      headers: {
        authorization: `your token`,
      },
      data: formdata,
    }).then(
      (res) => {},
      (err) => {},
    )
  }

  render() {
    return (
      <div>
        <div className='row'>
          <h5>Import Project Page</h5>
          <div className='col-2'></div>
        </div>
        <form>
          <div className='row'>
            <input
              className='col-3 inputfile'
              type='file'
              name='file'
              onChange={(e) => this.handleFile(e)}
            />
            &nbsp;{' '}
            <button
              className='upload'
              type='button'
              onClick={(e) => this.handleUpload}
            >
              Upload
            </button>
          </div>
        </form>
        <div className='border' />

        <div className='gradient newgradient'>
          <img
            className='image '
            src={require('../../../images/project.png')}
          />

          <div className='work-project newwork-project'>
            {' '}
            ไอดี 0001
            <p>โปรเจค A</p>
          </div>
          <div className='project'> สถานะการทำงาน : กำลังทำงาน</div>
        </div>

        <div className='gradient2 newgradient'>
          <img
            className='image '
            src={require('../../../images/project.png')}
          />
          <div className='work-project newwork-project'>
            {' '}
            ไอดี 0002
            <p>โปรเจค B</p>
          </div>
          <div className='project'> สถานะการทำงาน : กำลังทำงาน</div>
        </div>

        <div className='gradient2 newgradient'>
          <img
            className='image '
            src={require('../../../images/project.png')}
          />
          <div className='work-project newwork-project'>
            {' '}
            ไอดี 0003
            <p>โปรเจค C</p>
          </div>
          <div className='project'> สถานะการทำงาน : กำลังทำงาน</div>
        </div>
      </div>
    )
  }
}

projects.defaultProps = {}
projects.propTypes = {}
export default projects
