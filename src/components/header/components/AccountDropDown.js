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
    Auth.logout();
  };

  return (
    <div>
      <Button className={styles.tag} onClick={handleClick}>
        <FontAwesomeIcon icon={ faUser }/>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logout} ><a href="/">Logout</a></MenuItem>
      </Menu>
    </div>
  );
}