import React from 'react'
import Logo from 'components/Logo/Logo'
import firebase, { auth } from 'config/firebaseConfig'
import Container from 'components/layout/Container'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Login extends React.Component {

  state = { isSignedIn: false }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      auth.GoogleAuthProvider.PROVIDER_ID
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
    return (
      <Container>
        <Logo />
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      </Container>
    )
  }
}

export default Login
