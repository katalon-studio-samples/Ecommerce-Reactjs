import serverCall from '../../modules/serverCall'

export const signup=(fullname,email,password,verifyPassword)=>dispatch=>{
  dispatch({
    type: POST_SIGNUP_BEGIN,
  })
  return serverCall({
    method:'POST',
    url:'/users/signup',
    data:{
      fullname,email,password,verifyPassword
    }
  })
  .then(res=>{
    dispatch({
      type:POST_SIGNUP_SUCCESS,
      payload:res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type:POST_SIGNUP_FAIL,
      payload:{error}
    })
    throw error
  })
}

export const POST_SIGNUP_BEGIN='POST_SIGNUP_BEGIN'
export const POST_SIGNUP_SUCCESS='POST_SIGNUP_SUCCESS'
export const POST_SIGNUP_FAIL='POST_SIGNUP_FAIL'
