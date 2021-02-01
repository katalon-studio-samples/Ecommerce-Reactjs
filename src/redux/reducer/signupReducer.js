import {
  POST_SIGNUP_BEGIN,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAIL
} from '../action/signupAction'

const initialState = {
  signup_loading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_BEGIN:
      return {
        ...state,
        signup_loading: true
      }
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
        signup_loading: false,
      }
    case POST_SIGNUP_FAIL:
      return {
        ...state,
        signup_loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}