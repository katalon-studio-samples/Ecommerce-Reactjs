import React from 'react'
import styles from '../stylesheets/userHeader.module.sass'
import "../stylesheets/override.scss";
import { NavDropdown } from 'react-bootstrap'
import Auth from '../../../modules/Auth'
import jumpTo from '../../../modules/Navigation'
import { faShoppingCart, faUser  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Menu, MenuItem, anchorEl } from '@material-ui/core';
import AccountDropDown from './AccountDropDown';
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserHeader({ user_token }) {
  return (
    <div className={styles.outbox}>
      <div className={styles.tag} onClick={() => jumpTo('/bag')}>
        <FontAwesomeIcon icon={ faShoppingCart }/>
      </div>
      {(user_token && Object.keys(user_token).length > 0)
        ?
        <div>
          <NavDropdown className={styles.tag} title={<FontAwesomeIcon icon={ faUser }/>}>
            <NavDropdown.Item onClick={Auth.logout} href='/'>
              Logout
             </NavDropdown.Item>
          </NavDropdown>
        </div>
        :
        <div>
          <div className={styles.tag} onClick={() => jumpTo('/login')}>
            <FontAwesomeIcon icon={ faUser }/>
        </div>
        </div>
      }
    </div>
  )
}
