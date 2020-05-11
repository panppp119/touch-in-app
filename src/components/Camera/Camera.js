import React, { Component } from 'react';
import { BsCamera } from "react-icons/bs";
import Container from 'components/layout/Container'
import '../../pages/Check-In/CheckIn-Type/form'
import './Camera.scss'
export class Camera extends Component {


    processDevices(devices) {
        devices.forEach(device => {
            console.log(device.label);
            this.setDevice(device);
        });
    }

    async setDevice(device) {
        const { deviceId } = device;
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { deviceId } });
        this.videoPlayer.srcObject = stream;
        this.videoPlayer.play();
    }

    async componentDidMount() {
        const cameras = await navigator.mediaDevices.enumerateDevices();
        this.processDevices(cameras);
    }
    takePhoto = () => {
        const { sendFile } = this.props;
        const context = this.canvas.getContext('2d');
        context.drawImage(this.videoPlayer, 0, 0, 320, 150);
        this.canvas.toBlob(sendFile);
    };

    render() {
  
        return (
            <Container>
                <div className="form-checkin">
           
                    <div hidden="hidden">
                        <video ref={ref => (this.videoPlayer = ref)} width="50" heigh="50" />
                    </div>
                     
                    <BsCamera onClick={this.takePhoto}>Take photo!</BsCamera>
                    <div >
                        <canvas ref={ref => (this.canvas = ref)} />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Camera