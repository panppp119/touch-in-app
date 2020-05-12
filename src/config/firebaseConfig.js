import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/messaging'

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
//   databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// }

const config = {
    apiKey: "AIzaSyCfnlG_XkvCbtug5uvQih-6gLbWa1jWTyE",
    authDomain: "react-601463021.firebaseapp.com",
    databaseURL: "https://react-601463021.firebaseio.com",
    projectId: "react-601463021",
    storageBucket: "react-601463021.appspot.com",
    messagingSenderId: "722437976589",
    appId: "1:722437976589:web:63b825e14212b651"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const analytics = firebase.analytics()
export const realtime = firebase.database()
export const message = firebase.messaging()
