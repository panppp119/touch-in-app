import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { connect } from 'react-redux'

import { login } from 'actions/auth'
import touchLogo from 'images/touch_logo.png'
// import XlsToJson from 'components/convert/XlsToJson'
// import { userHeaders } from 'constants/headers'

import './Login.scss'

class Login extends React.Component {
  state = {
    isSignedIn: false,
    ggError: null,
  }

  ggSignIn = (e) => {
    e.preventDefault()

    this.props.login()
  }

  render() {
    const { ggError } = this.state

    return (
      <div className='login-page'>
        <div className='sign-in'>
          <div className='touch-logo'>
            <img src={touchLogo} alt='touch-logo' />
          </div>
          <button className='google' onClick={this.ggSignIn}>
            <FaGoogle />
            เข้าสู่ระบบด้วย Google
          </button>
          {ggError && <p className='error'>{ggError.message}</p>}

          {/* <XlsToJson headers={userHeaders} /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  login: () => login(),
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
