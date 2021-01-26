import React from 'react'
import styles from '../stylesheets/button.module.sass'



export default function Button({ button_title,onClick }) {
  return (
    <div className="forminput_button" className={styles.outbox}>
      <input type="button" value={button_title} className={styles.btn} onClick={onClick}/>
    </div>
  )
}
