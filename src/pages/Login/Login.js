import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase, { auth } from 'config/firebaseConfig'
import touchLogo from 'images/touch_logo.png'

import './Login.scss'

class Login extends React.Component {
  state = { isSignedIn: false }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user })
      console.log('user', user)
    })
  }

  render() {
    return (
      <div className='login-page'>
        <div className='sign-in'>
          <img src={touchLogo} alt='touch-logo' className='touch-logo' />
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth} />
        </div>
      </div>
    )
  }
}

export default Login
