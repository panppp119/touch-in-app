import React, { Component } from 'react'
import Container from 'components/layout/Container'
import './Search.scss'
import firebase from 'config/firebaseConfig'


export class Report extends Component {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('Unknown') // Unknown เอาชื่อฐานข้อมูลมาแทน ตย. user
        this.state = {
            Unknown: [] // ตรงนี้ก็เช่นกัน 
        }
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollection)
    }

    onCollection = (querySnapshot) => {
        const Unknown = []
        querySnapshot.forEach((doc) => {
            const { } = doc.data() //ใน {} ตย. { uid, First_Name, Last_Name, Email, url }
            Unknown.push({
                /* ตรงนี้ ตย. key: doc.id,
               doc,
               uid,
               First_Name,
               Last_Name,
               Email,
               url*/
            })
        })
        this.setState({
            Unknown // นี่ด้วย
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    reset = () => {
        this.date_start.value = '';
        this.date_end.value = '';
        this.department.value = '';
        this.checkin.value = '';
        this.project.value = '';
    }

    render() {
        return (
            <Container>
                <div className='search-report'>
                    <div className='text-title'>
                        <h2>ค้นหารายการ</h2>
                        <div className='border' />
                        <div className="card-detail">
                            <p>ตั้งแต่วันที่</p>
                            <input type='date' className='form-control' name='date_start' value={this.state.date_start} onChange={this.onChange} ref={el => this.date_start = el} />
                            <p>ถึงวันที่</p>
                            <input type='date' className='form-control' name='date_end' value={this.state.date_end} onChange={this.onChange} ref={el => this.date_end = el} />                           
                            <p>แผนก</p>
                            <select type='text' className='form-control' name='department' value={this.state.department} onChange={this.onChange} ref={el => this.department = el} >
                                <option></option>
                                <option>Test 1</option>
                                <option>Test 2</option>
                                <option>Test 3</option>
                            </select>
                            <p>ประเภทการเช็คอิน</p>
                            <select type='text' className='form-control' name='checkin' value={this.state.checkin} onChange={this.onChange} ref={el => this.checkin = el}>
                                <option></option>
                                <option>Test 1</option>
                                <option>Test 2</option>
                                <option>Test 3</option>
                            </select>
                            <p>โปรเจค</p>
                            <select type='text' className='form-control' name='project' value={this.state.project} onChange={this.onChange} ref={el => this.project = el}>
                                <option></option>
                                <option>Test 1</option>
                                <option>Test 2</option>
                                <option>Test 3</option>
                            </select>
                        </div>
                        <button type="button" className='btn btn-success'>ค้นหา</button>
                        <button type="button" className='btn btn-danger' onClick={this.reset} value="ยกเลิก" >ยกเลิก</button>
                    </div>
                </div>
            </Container>
        )
    }
}


export default Report
