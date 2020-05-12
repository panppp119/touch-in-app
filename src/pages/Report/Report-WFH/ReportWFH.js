import React, { Component } from 'react'
import { BsFillHouseFill } from "react-icons/bs";
import './ReportWFH.scss'


export class ReportWFH extends Component {

    render() {
        return (
            <div className='report-wfh'>
                <div className='text-title'>
                    <h1>ประวัติการเช็คอิน</h1>
                </div>
                <div className='border' />
                <div className='title-bar'>
                    <h3>
                        <div className='title-icon'>
                            <BsFillHouseFill />
                        </div>
                        Work From Home
                    </h3>
                </div>
                <div className='card-detail'>
                    <p>ลำดับที่ :</p>
                    <div className='border-detail' />
                    <p>รหัสพนักงาน :</p>
                    <div className='border-detail' />
                    <p>ชื่อ - นามสกุล :</p>
                    <div className='border-detail' />
                    <p>แผนก :</p>
                    <div className='border-detail' />
                    <p>ประเภทการเช็คอิน :</p>
                    <div className='border-detail' />
                    <p>โปรเจค :</p>
                    <div className='border-detail' />
                    <p>ตำบล :</p>
                    <div className='border-detail' />
                    <p>อำเภอ :</p>
                    <div className='border-detail' />
                    <p>จังหวัด :</p>
                    <div className='border-detail' />
                    <p>วันที่ :</p>
                    <div className='border-detail' />
                    <p>เวลา :</p>
                    <div className='border-detail' />
                    <p>ตำแหน่ง :</p>
                    <div className='border-detail' />
                    <p>รูปภาพ :
                        <div className='workcard' />
                    </p>
                </div>
            </div>
        )
    }
}

ReportWFH.defaultProps = {}

ReportWFH.propTypes = {}

export default ReportWFH
