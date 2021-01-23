import React from 'react'
import styles from '../stylesheets/checkbox.module.sass'

export default function Checkbox({ onChange, name, category, isChecked }) {
  return (
    <div className={styles.outbox}>
      <label>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={(e) => onChange(e, category)}
          checked={isChecked}
        />
        <div className={styles.design} ></div>
        <span className={styles.text}>{name}</span>
      </label>
    </div>
  )
}
