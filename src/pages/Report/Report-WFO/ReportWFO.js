import React, { Component } from 'react'
import { BsBuilding } from "react-icons/bs";
import './ReportWFO.scss'


export class ReportWFO extends Component {

    render() {
        return (
            <div className='report-wfo'>
                <div className='text-title'>
                    <h1>ประวัติการเช็คอิน</h1>
                </div>
                <div className='border' />
                <div className='title-bar'>
                    <h3>
                        <div className='title-icon'>
                            <BsBuilding />
                        </div>
                        ปฏิบัติงานนอกสถานที่ จุดเริ่มต้น
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
                    <p>ประวัติการเช็คอิน :</p>
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
                        <div className='workcard' />
                        <div className='workcard' />
                    </p>
                </div>
                <div className='title-bar'>
                    <h3>
                        <div className='title-icon'>
                            <BsBuilding />
                        </div>
                        ปฏิบัติงานนอกสถานที่ จุดสิ้นสุด
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
                    <p>ประวัติการเช็คอิน :</p>
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
                        <div className='workcard' />
                        <div className='workcard' />
                    </p>
                </div>
            </div>
        )
    }
}

ReportWFO.defaultProps = {}

ReportWFO.propTypes = {}

export default ReportWFO
