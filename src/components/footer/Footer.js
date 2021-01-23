import React, { Component } from 'react'
import styles from './stylesheets/footer.module.sass'

export default class Footer extends Component {
  render() {
    return(
      <div className={styles.outbox}>CopyrighT © 2021 Katalon LLC. All rights reserved.</div>
    )
  }
}