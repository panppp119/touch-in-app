import firebase, { auth } from 'config/firebaseConfig'
import * as CONST from 'constants/auth'

export const checkAuth = () => (dispatch, getState) => {
  const authen = JSON.parse(localStorage.getItem('auth'))

  dispatch({ type: CONST.CHECK_AUTH })

  if (authen && authen.token !== null) {
    if (authen.provider !== 'email') {
      auth.onAuthStateChanged((user) => {
        if (user !== null) {
          console.log(user)
        } else {
          dispatch(logout())
        }
      })
    } else {
      // dispatch(fetchUser(userSchema))
    }
  } else {
    // dispatch({ type: CONST.CHECK_SESSION })
  }
}

export const login = () => (dispatch, getState) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  dispatch({ type: CONST.LOGIN })

  auth
    .signInWithPopup(googleProvider)
    .then((response) => {
      const userInfo = response.additionalUserInfo || {}
      const profile = userInfo.profile || {}
      const credential = response.credential || {}

      const user = {
        first_name: profile.given_name,
        last_name: profile.family_name,
        email: profile.email,
        provider: credential.providerId,
        uid: response.user.uid,
        image: profile.picture || process.env.REACT_APP_DEFAULT_IMAGE,
        access_token: credential.accessToken,
        refresh_token: response.user.refreshToken,
      }

      if (userInfo.isNewUser) {
        // dispatch(register(user))
        console.log('new user')
      } else {
        // dispatch(signin({ email: profile.email, provider }))
        console.log('exist user')
      }

      localStorage.seItem('token', credential.accessToken)
      dispatch({ type: CONST.LOGIN_SUCCESS, response: user })
    })
    .catch((error) => {
      console.warn(error)
    })
}

export const logout = () => (dispatch, getState) => {
  dispatch({ type: CONST.LOGOUT })

  auth
    .signOut()
    .then(() => {
      dispatch({ type: CONST.LOGOUT_SUCCESS })
    })
    .catch(() => {
      dispatch({ type: CONST.LOGOUT_FAIL })
    })
}
