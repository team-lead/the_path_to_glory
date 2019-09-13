import React, { Component , Fragment } from "react";
import { classes } from "./style";
import MyAccountMenu from "../MyAccountMenu";


class AddressBook extends Component {
  
  render() {
    return (
      <Fragment>
        <MyAccountMenu />
        <h1>Address Book</h1>
      </Fragment>
      
    )
  }
}

export default AddressBook;
