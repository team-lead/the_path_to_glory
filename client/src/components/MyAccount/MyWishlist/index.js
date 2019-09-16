import React, { Component , Fragment } from "react";
import { classes } from "./style";
import MyAccountMenu from "../MyAccountMenu";


class MyWishlist extends Component {
  
  render() {
    return (
      <Fragment>
        <MyAccountMenu />
        <h1>My Wishlist</h1>
      </Fragment>
      
    )
  }
}

export default MyWishlist;
