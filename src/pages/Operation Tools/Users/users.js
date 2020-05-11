import React, { Component } from 'react'
import './users.scss'
import { BsPlusCircleFill } from "react-icons/bs";
import firebase, { storage } from 'config/firebaseConfig'
import *as _ from 'lodash';


export class Users extends Component {
    constructor() {
        super()
        this.ref = firebase.firestore().collection('Import')
        this.state = {
            Test: storage
        }
    }

    onChange = e => {
        if (e.target.files[0]) {
            const files = e.target.files[0];
            this.setState(() => ({ files }));
        }
    };

    /*handdleUpload = (resolve) => {
        const { files } = this.state;
        const uploadTask = storage.ref(`files/${files.name}`).put(files);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                console.log('snapshot')
            },
            error => {
                // Error function ...
                console.log(error);
            },
            setTimeout(() => {
                this.firestorethis().then(() => {
                    resolve();
                })
            }, 60000),

            storage
                .ref("files")
                .child(files.name)
                .getDownloadURL()
                .then(url => {
                    this.setState({ url });
                })
        )
    }*/

    handdleUpload = (resolve) => {
        const { files } = this.state
        const uploadTask = storage.ref(`files/${files.name}`).put(files)
        firebase.database().ref('excelimport').child('newexcel').set({
            thaturl: uploadTask
        }).then(() => {

            console.log('uploaded');

        })

        setTimeout(() => {
            this.firestorethis().then(() => {
                resolve();
            })
        })

            .firestorethis((resolve) => {
                firebase.storage().ref('jsonfile.json').getDownloadURL().then((url) => {
                    this.http.get(url).map(res => res.json()).subscribe((data) => {
                        let somerand = JSON.stringify(data)
                        this.storethis(data).then(() => {
                            resolve()
                        })
                    })
                })
            })
            .storethis((somejson) => {
                _.map(somejson, (element, i) => {
                    _.keys(element).map(elementkey => {
                        this.Test.collection('Import').doc('document' + i).set(element);
                    })
                })
            })
    }
    render() {
        return (
            <div className='user-import'>
                <div className='text-title'>
                    <h2>ผู้ใช้</h2>
                    <div className='icon'>
                        <BsPlusCircleFill
                            

                        />
                    </div>
                </div>
                <div className='border' />
            </div>
        )
    }
}



export default Users
