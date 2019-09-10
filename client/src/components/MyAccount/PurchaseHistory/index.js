import React, { Component,  Fragment  } from "react";
import { classes } from "./style";
import MyAccountMenu from "../MyAccountMenu";


class PurchaseHistory extends Component {
  
  render() {
    return (
      <Fragment>
        <MyAccountMenu />
        <h1>Purchase History</h1>
      </Fragment>
      
    )
  }
}

export default PurchaseHistory;
