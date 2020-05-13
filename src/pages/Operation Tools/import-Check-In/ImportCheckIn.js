import React from 'react'

import './ImportCheckIn.scss'

class ImportCheckIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
  render() {
    let imgPreview;
    if (this.state.file) {
        imgPreview = <img src={this.state.file} alt='' />;
    }
    return (
        <div className='profile-history'>
        <div className='header'>
           <h2 className="font">&nbsp;เพิ่มประเภทการเช็คอิน</h2>
        </div>
        <img className="back-icon" src={require('../../../images/back.png')} />
        
        <div>
           <h2>กรุณาเลือกไอคอนการเช็คอิน </h2>
        <input type="file" accept='image/*' className="form-control" onChange={this.uploadSingleFile} />
        </div>

        <div>
        <br/><h2>กรุณาป้อนไอดีการเช็คอิน</h2>
        <input placeholder="ไอดีการเช็คอิน" type="text" className="form-control"  />
        </div>

        <div>
        <br/><h2>กรุณาป้อนชื่อการเช็คอิน</h2>
        <input placeholder="ชื่อการเช็คอิน" type="text" className="form-control"  />
        </div>
      
      </div>
    )
  }
}

ImportCheckIn.defaultProps = {}

ImportCheckIn.propTypes = {}

export default ImportCheckIn
