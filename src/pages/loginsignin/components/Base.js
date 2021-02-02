import styles from '../stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import Footer from './footer'
import logo from '../../../assets/images/logo.png'

export default function Base({
  title,
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  onSubmit,
  errorMsg,
  button_title,
  footer_content
}) {
  return (
    <div className={styles.outbox}>
      <img src={logo} className={styles.logo}></img>
      {
        inputs.map(({ name, displayName, validations }) =>
          <FormInput
            key={name}
            name={name}
            displayName={displayName}
            validations={validations}
            errorMessage={errorMsg[name].errorMsg}
            onChange={onInputChange}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
          />
        )
      }
      <Button button_title={button_title} onClick={onSubmit} />
      <Footer content={footer_content} />
    </div>
  )
}


