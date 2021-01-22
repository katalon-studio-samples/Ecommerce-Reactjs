import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Auth from '../../../modules/Auth';
import styles from '../stylesheets/userHeader.module.sass';
import { faShoppingCart, faUser  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AccountDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    Auth.logout();
  };

  return (
    <div>
      <Button className={styles.tag} size= 'small' aria-controls="account-menu" aria-haspopup="true" onClick={handleClick}>
        <FontAwesomeIcon icon={ faUser }/>
      </Button>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={Auth.logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}