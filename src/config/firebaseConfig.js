import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/messaging'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

// const config = {
//   apiKey: 'AIzaSyBBajrAIcxdN8Z0pT3U6Jl-kJBI4NNGE7c',
//   authDomain: 'touch-in-app.firebaseapp.com',
//   databaseURL: 'https://touch-in-app.firebaseio.com',
//   projectId: 'touch-in-app',
//   storageBucket: 'touch-in-app.appspot.com',
//   messagingSenderId: '910531456139',
//   appId: '1:910531456139:web:4114f0942937715c4e788e',
//   measurementId: 'G-TXT2Z9G76G',
// }

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const analytics = firebase.analytics()
export const realtime = firebase.database()
export const message = firebase.messaging()

export default firebase
