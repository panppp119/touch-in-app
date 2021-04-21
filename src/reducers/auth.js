import { fromJS } from 'immutable'

import * as CONST from 'constants/auth'
// import { ADD_FLASH_MESSAGE } from 'constants/ui'

const initialState = fromJS({})

export default (
  state = initialState,
  { type, response, error, auth, provider },
) => {
  switch (type) {
    case CONST.LOGIN:
    case CONST.LOGOUT:
      return state.set('loading', true)

    case CONST.LOGIN_SUCCESS:
      return state
        .set('access_token', fromJS(response.access_token))
        .set('data', fromJS(response))
        .set('provider', fromJS(response.provider))
        .set('loading', false)

    case CONST.LOGOUT_SUCCESS:
      return state
        .set('loading', false)
        .set('access_token', fromJS({}))
        .set('response', fromJS({}))
        .set('provider', fromJS({}))

    case CONST.CHECK_AUTH:
      if (auth) {
        return state
          .set('access_token', fromJS(auth.token))
          .set('provider', fromJS(auth.provider))
          .set('loading', false)
      } else {
        return state
      }

    case CONST.LOGIN_FAIL:
    case CONST.LOGOUT_FAIL:
      return state.set('loading', false)

    // case ADD_FLASH_MESSAGE:
    //   return state.set('loading', false)

    default:
      return state
  }
}
