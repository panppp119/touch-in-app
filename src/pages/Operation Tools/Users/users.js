import React, { Component } from 'react'
import './users.scss'
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

export class Users extends Component {
    render() {
        return (
            <div className='user-import'>
                <div className='text-title'>
                    <h2>ผู้ใช้</h2>
                    <div className='icon'>
                        <BsPlusCircleFill />
                    </div>
                </div>
                <div className='border' />
                <div className='row'>

                    <Link to='/User Detail'>
                        <div className='card-detail'>
                            <p>ชื่อ - สกุล</p>
                            <p>ตำแหน่ง</p>
                            <p>แผนก</p>
                        </div>
                    </Link>

                    <div className='card-detail'>
                        <p>ชื่อ - สกุล</p>
                        <p>ตำแหน่ง</p>
                        <p>แผนก</p>
                    </div>

                    <div className='card-detail'>
                        <p>ชื่อ - สกุล</p>
                        <p>ตำแหน่ง</p>
                        <p>แผนก</p>
                    </div>

                    <div className='card-detail'>
                        <p>ชื่อ - สกุล</p>
                        <p>ตำแหน่ง</p>
                        <p>แผนก</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}



export default Users
