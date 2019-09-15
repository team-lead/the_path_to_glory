import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { classes } from "./style";


class MyAccountMenu extends Component {
  render() {

    return (
      <>
        <NavLink exact to="/myaccount/main" className={classes.h1}>
          My account
        </NavLink>
        <nav className={classes.navbarMenu}>
          <NavLink exact to="/myaccount/myprofile" className={classes.navbarMenuItem + " " + classes.selectedItem}>
            My Profile
            </NavLink>
          <NavLink to="/myaccount/wishlist" className={classes.navbarMenuItem}>
            My Wishlist
            </NavLink>
          <NavLink to="/myaccount/history" className={classes.navbarMenuItem}>
            Pyrchase history
            </NavLink>
          <NavLink to="/myaccount/addressbook" className={classes.navbarMenuItem}>
            Address book
            </NavLink>
        </nav>
      </>
    );
  }
}



export default MyAccountMenu;
