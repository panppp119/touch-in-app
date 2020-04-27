import React, { Component } from 'react'
import './Profile-Overview.scss'

export class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Menubar</h1>
                <div className="text-title">
                    <h2>ข้อมูลผู้ใช้งาน</h2>
                </div>
                <div className="border" />
                <div className="title-bar">
                    <h3><i class="fa fa-fw fa-user-circle" style={{paddingTop:5 , paddingRight:5}}></i>โปรไฟล์</h3>
                </div><br />
                <div className="card-detail">
                    <h4>ชื่อ - นามสกุล</h4>
                    <div className="border-detail" />
                    <h4>ชื่อ - นามสกุล (ภาษาอังกฤษ)</h4>
                    <div className="border-detail" />
                    <h4>ชื่อเล่น</h4>
                    <div className="border-detail" />
                    <h4>E - Mail</h4>
                </div>

                <div className="title-bar">
                    <h3><i class="fa fa-fw fa-briefcase" style={{paddingTop:5 , paddingRight:5}}></i>สถานะการทำงาน</h3>
                </div><br />
                <div className="card-detail">
                    <h4>ตำแหน่ง</h4>
                    <div className="border-detail" />
                    <h4>แผน</h4>
                    <div className="border-detail" />
                    <h4>สถานะ</h4>
                    <div className="border-detail" />
                    <h4>กลุ่มผู้ใช้</h4>
                    <div className="border-detail" />
                    <h4>วันที่เริ่มทำงาน</h4>
                    <div className="border-detail" />
                    <h4>จำนวน ปี : เดือน : วัน ที่ทำงาน</h4>
                </div>

                <div className="title-bar">
                    <h3><i class="fa fa-fw fa-bed" style={{paddingTop:5 , paddingRight:5}}></i>สิทธิ์การลา</h3>
                </div><br />
                <div className="card-detail">
                    <h4>สิทธิ์วันลาพักร้อน</h4>
                    <div className="border-detail" />
                    <h4>สิทธิ์วันลากิจ</h4>
                    <div className="border-detail" />
                    <h4>สิทธิ์วันลาป่วย</h4>
                </div>
                <br />
            </div>
        )
    }
}
export default Profile
