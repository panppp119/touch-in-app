import React, { Component } from 'react'
import { BsPlusCircleFill } from "react-icons/bs";

export class User extends Component {
    render() {
        return (
            <div className='User-Import'>
                <p>menubar</p>
                <div className='text-title'>
                    <h2>ผู้ใช้</h2>
                    <div className='icon'>
                        <BsPlusCircleFill />
                    </div>
                </div>
                <div className='border' />
                <div className='row'>

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


export default User
