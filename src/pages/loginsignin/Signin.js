import React from 'react'
import LoginSignin from './LoginSignin'
import {
  validateExistence,
  validateEmail,
  validateLength,
  validateLowerCase,
  validateUpperCase
} from './utils/validation'


const INPUT_CONFIG = [
  {
    name: "email",
    displayName: "Email",
    validations: [validateExistence, validateEmail]
  },
  {
    name: "password",
    displayName: "Password",
    validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
  }
]

export default function SignIn({ postToken, signin_loading, signin_error }) {
  return (
    <div>
      <LoginSignin
        INPUT_CONFIG={INPUT_CONFIG}
        title="Signin"
        footer_text="Don't you have an account?"
        footer_redirect="signup"
        submitAction={postToken}
        loading={signin_loading}
      />
    </div>
  )
}





