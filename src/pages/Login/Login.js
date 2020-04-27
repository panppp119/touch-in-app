import React from 'react'
import Logo from '../../components/Logo/Logo'
import firebase from '../../config/firebaseConfig'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Login extends React.Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render() {
    return  (
      <div className="container">
        <Logo />
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
  }
}

export default Login
