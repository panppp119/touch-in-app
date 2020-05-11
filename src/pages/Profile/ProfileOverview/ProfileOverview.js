import React, { Component } from 'react'
import './ProfileOverview.scss'
import { BsPeopleCircle, BsFillBriefcaseFill } from 'react-icons/bs'
import { FaProcedures } from 'react-icons/fa'

export class ProfileOverview extends Component {
  render() {
    return (
      <div className='profile-overview'>
        <div className='text-title'>
          <h1>ข้อมูลผู้ใช้งาน</h1>
        </div>
        <div className='border' />
        <div className='title-bar'>
          <h3>
            <div className='title-icon'>
              <BsPeopleCircle />
            </div>
            โปรไฟล์
          </h3>
        </div>
        <div className='card-detail'>
          <p>ชื่อ - นามสกุล</p>
          <div className='border-detail' />
          <p>ชื่อ - นามสกุล (ภาษาอังกฤษ)</p>
          <div className='border-detail' />
          <p>ชื่อเล่น</p>
          <div className='border-detail' />
          <p>E - Mail</p>
        </div>

        <div className='title-bar'>
          <h3>
            <div className='title-icon'>
              <BsFillBriefcaseFill />
            </div>
            สถานะการทำงาน
          </h3>
        </div>
        <div className='card-detail'>
          <p>ตำแหน่ง</p>
          <div className='border-detail' />
          <p>แผน</p>
          <div className='border-detail' />
          <p>สถานะ</p>
          <div className='border-detail' />
          <p>กลุ่มผู้ใช้</p>
          <div className='border-detail' />
          <p>วันที่เริ่มทำงาน</p>
          <div className='border-detail' />
          <p>จำนวน ปี : เดือน : วัน ที่ทำงาน</p>
        </div>

        <div className='title-bar'>
          <h3>
            <div className='title-icon'>
              <FaProcedures />
            </div>
            สิทธิ์การลา
          </h3>
        </div>
        <div className='card-detail'>
          <p>สิทธิ์วันลาพักร้อน</p>
          <div className='border-detail' />
          <p>สิทธิ์วันลากิจ</p>
          <div className='border-detail' />
          <p>สิทธิ์วันลาป่วย</p>
        </div>
      </div>
    )
  }
}

export default ProfileOverview
