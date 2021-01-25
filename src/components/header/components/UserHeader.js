import React from 'react'
import styles from '../stylesheets/userHeader.module.sass'
import jumpTo from '../../../modules/Navigation'
import { faShoppingCart, faUser  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountDropDown from './AccountDropDown';
export default function UserHeader({ user_token }) {
  return (
    <div className={styles.outbox}>
      <div className={styles.tag} onClick={() => jumpTo('/bag')}>
        <FontAwesomeIcon icon={ faShoppingCart }/>
      </div>
      {(user_token && Object.keys(user_token).length > 0)
        ?
        <AccountDropDown/>
        : 
        <div className={styles.loggout}>
          <div className={styles.tag} onClick={() => jumpTo('/login')}>
            <FontAwesomeIcon icon={ faUser }/>
        </div>
        </div>
      }
    </div>
  )
}
