import React from 'react'

import './Dashboard.scss'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h3>หน้าหลัก</h3>

        <div className='group'>
          <div className='group2' />
          <div className='font'>เมนูลัด</div>
        </div>
        <br />

        <div className='menu' />
        <div className='menu2' />
        <div className='menu3' />
        <div className='menuitem' />
        <div className='menuitem2' />
        <div className='menuitem3' />

        <br />
        <br />

        <div className='menu' />
        <div className='menu2' />
        <div className='menu3' />
        <div className='menuitem' />
        <div className='menuitem2' />
        <div className='menuitem3' />

        <div className='fontmenu'>Work From Home</div>
        <div className='fontmenu5'>Work Outside</div>
        <div className='fontmenu3'>กฏการเบิก</div>

        <div className='positionfont'>
          <div className='fontmenu1 position'>Import User</div>
          <div className='fontmenu2 position3'>Import Project</div>
          <div className='fontmenu4 position2'>ประเภทการเช็คอิน</div>
        </div>
        <br />
        <br />

        <div className='group'>
          <div className='group2' />
          <div className='font'>เช็คอินล่าสุด</div>
        </div>

        <div className='checkin' />
        <br />

        <div className='checkin' />
        <br />
      </div>
    )
  }
}

Dashboard.defaultProps = {}

Dashboard.propTypes = {}

export default Dashboard
