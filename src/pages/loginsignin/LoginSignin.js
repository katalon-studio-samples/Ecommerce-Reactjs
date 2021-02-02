import React, { Component } from 'react'
import styles from './stylesheets/loginsignin.module.sass'
import Base from './components/Base'
import jumpTo from '../../modules/Navigation'
import LoadingAnimation from '../../components/loadingAnimation'
import loginImage from '../../assets/images/login-image.png'
import MediaQuery from 'react-responsive'
import device, { size } from '../../modules/mediaQuery'
export default class LoginSignin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.inputText = {}
    for (const input of props.INPUT_CONFIG) {
      this.state[input.name] = { errorMsg: '' }
      this.inputText[input.name] = ''
    }
  }
  //validate input when blur
  handleBlur = (e, validResult) => {
    const name = e.target.name
    this.inputText[name] = e.target.value
    if (!validResult.isValid) {
      this.setState({
        [name]: { errorMsg: validResult.errorMsg }
      })
    } else {
      this.setState({
        [name]: { errorMsg: '' }
      })
    }
  }
  // when focus, clear error message
  handleFocus = (e) => {
    const name = e.target.name
    this.setState({
      [name]: { errorMsg: '' }
    })
  }
  //submit actions
  handleClick = () => {
    //validate all input 
    let canSubmit = true
    for (const input of this.props.INPUT_CONFIG) {
      if (!!!input.validations) continue
      for (const v of input.validations) {
        let checkResult = v.check(this.inputText[input.name])
        canSubmit = canSubmit && checkResult
        if (!checkResult) {
          this.setState({
            [input.name]: { errorMsg: v.errMsg }
          })
          break
        }
      }
    }
    if (!canSubmit) {
      console.log('valid fail');
      return
    }
    if (this.props.title === 'Signin') {
      const { email, password } = this.inputText
      this.props.submitAction(email, password)
        .then(res => {
          jumpTo('/dashboard')
          // console.log(res)
          // console.log('loginsignin res');
          return res
        })
        .catch(error => {
          // console.log('loginsignin error')
          // console.log(error.response)
          if (error.response.data.error) {
            alert(error.response.data.error.message)
          } else {
            console.log(error.response.data)
          }
          return error
        })
    }
    if (this.props.title === 'Signup') {
      const { fullname, email, password, verifyPassword } = this.inputText
      this.props.submitAction(fullname, email, password, verifyPassword)
        .then(res => {
          jumpTo('/signin')
        })
        .catch(error => {
          if (error.response.data.error) {
            alert(error.response.data.error.message)
          } else {
            console.log(error.response.data)
          }
          return error
        })
    }
  }
  render() {
    return (
      <div className={styles.outbox}>
        <div className={styles.box}>
          {this.props.loading &&
            <LoadingAnimation />
          }
          <MediaQuery query={device.min.tablet}>
            <img className={styles.login_image} src={loginImage}></img>
          </MediaQuery>
          <Base
            className={styles.login_form}
            title={this.props.title}
            inputs={this.props.INPUT_CONFIG}
            onInputBlur={this.handleBlur}
            onInputFocus={this.handleFocus}
            onSubmit={this.handleClick}
            errorMsg={this.state}
            button_title={this.props.title === "Signup" ? "Sign Up" : "Sign In"}
            footer_content={
              <div>
                {this.props.footer_text} <a className={styles.redirect} href={`/${this.props.footer_redirect}`}>
                  {this.props.footer_redirect === "signup" ? "Sign Up" : "Sign In"}
                </a>
              </div>
            }
          />
        </div>
      </div>
    )
  }
}
