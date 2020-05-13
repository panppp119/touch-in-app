import React, { Component } from 'react'
import XLSX from 'xlsx'

export class ExportBtn extends Component {
     /* constructor(props) {
         super(props)
         this.ref = firebase.firestore().collection('User')
         this.state = {
             User: []
         }
         this.exportFile = this.exportFile.bind(this)
     }
 
     componentDidMount() {
         this.unsubscribe = this.ref.onSnapshot(this.onCollection)
     }
 
     onCollection = (querySnapshot) => {
         const User = []
         querySnapshot.forEach((doc) => {
             const { } = doc.data()
             User.push({
                 
             })
         })
         this.setState({
             User
         })
     }*/

     exportFile() {
        let User = [[""]] //state
        this.state.User.forEach((user) => {
            let userArray = [] //state
            User.push(userArray)
        })
        const wb = XLSX.utils.book_new()
        const wsAll = XLSX.utils.aoa_to_sheet(User)
        XLSX.utils.book_append_sheet(wb, wsAll, "All User")
        XLSX.writeFile(wb, "export-demo.xlsx")
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.exportFile}>Export to Excel</button>
            </div>
        )
    }
}



export default ExportBtn
