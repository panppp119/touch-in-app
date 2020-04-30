import React, { Component } from 'react'
import { BsPlusCircleFill } from "react-icons/bs";

export class User extends Component {
  render() {
    return (
      <div>
        <div className='text-title'>
          <h2>ผู้ใช้</h2>
          <div className='icon'>
            <BsPlusCircleFill />
          </div>
        </div>
      </div>
    )
  }
}



export default User
