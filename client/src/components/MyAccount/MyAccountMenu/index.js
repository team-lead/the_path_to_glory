import React, { Component } from "react";
import { classes } from "./style";


class MyAccountMenu extends Component {
  render() {

    return (
      <>
        <h1 className = {classes.h1}>My account</h1>
        <nav className={classes.navbarMenu}>
          <a href="/myaccount/myprofile" className={classes.navbarMenuItem + " " + classes.selectedItem}>
            My Profile
            </a>
          <a href="#" className={classes.navbarMenuItem}>
            My Wishlist
            </a>
          <a href="#" className={classes.navbarMenuItem}>
            Pyrchase history
            </a>
          <a href="#" className={classes.navbarMenuItem}>
            Address book
            </a>
        </nav>
      </>
    );
  }
}



export default MyAccountMenu;
