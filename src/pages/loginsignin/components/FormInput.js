import React from 'react'
import styles from '../stylesheets/formInput.module.sass'

export default function FormInput({
  name,
  displayName,
  validations,
  errorMessage,
  onBlur,
  onFocus,
}) {
  return (
    <div className={styles.outbox}>
      <div className={styles.label}>
        <label htmlFor={name}>{displayName}</label>
      </div>
      <div className={styles.input}>
        <input
          type={name.indexOf('assword') > -1 ? 'password' : 'text'}
          name={name}
          onBlur={(e) => onBlur(e, validate(validations, e.target.value))}
          onFocus={onFocus}
        />
        <div className={styles.errMsg}>
          {errorMessage}
        </div>
      </div>
    </div>
  )
}

const validate = (validations, val) => {
  if (validations) {
    for (const validation of validations) {
      if (!validation.check(val)) {
        return {
          isValid: false,
          errorMsg: validation.errMsg
        }
      }
    }
  }
  return { isValid: true }
}

