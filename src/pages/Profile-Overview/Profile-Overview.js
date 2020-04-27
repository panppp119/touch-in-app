import React, { Component } from 'react'
import './profile.scss'

export class Profile extends Component {
    render() {
        return (
            <div>
                <h4>Menubar</h4>
                <div className="text-title">
                    <h2>ข้อมูลผู้ใช้งาน</h2>
                </div>
                <div className="border" />
                <div className="title-bar">
                    <h3><div className="title-icon"><i class="fa fa-fw fa-user-circle"></i></div>โปรไฟล์</h3>
                </div><br />
                <div className="card-detail">
                    <p>ชื่อ - นามสกุล</p>
                    <div className="border-detail" />
                    <p>ชื่อ - นามสกุล (ภาษาอังกฤษ)</p>
                    <div className="border-detail" />
                    <p>ชื่อเล่น</p>
                    <div className="border-detail" />
                    <p>E - Mail</p>
                </div>

                <div className="title-bar">
                    <h3><div className="title-icon"><i class="fa fa-fw fa-briefcase" ></i></div>สถานะการทำงาน</h3>
                </div><br />
                <div className="card-detail">
                    <p>ตำแหน่ง</p>
                    <div className="border-detail" />
                    <p>แผน</p>
                    <div className="border-detail" />
                    <p>สถานะ</p>
                    <div className="border-detail" />
                    <p>กลุ่มผู้ใช้</p>
                    <div className="border-detail" />
                    <p>วันที่เริ่มทำงาน</p>
                    <div className="border-detail" />
                    <p>จำนวน ปี : เดือน : วัน ที่ทำงาน</p>
                </div>

                <div className="title-bar">
                    <h3><div className="title-icon"><i class="fa fa-fw fa-bed" ></i></div>สิทธิ์การลา</h3>
                </div><br />
                <div className="card-detail">
                    <p>สิทธิ์วันลาพักร้อน</p>
                    <div className="border-detail" />
                    <p>สิทธิ์วันลากิจ</p>
                    <div className="border-detail" />
                    <p>สิทธิ์วันลาป่วย</p>
                </div>
                <br />
            </div>
        )
    }
}
export default Profile
