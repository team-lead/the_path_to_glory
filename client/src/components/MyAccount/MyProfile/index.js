import React, { Component } from "react";
import { classes } from "./style";


class MyProfile extends Component {
  render() {

    const { user } = this.props;

    console.log('----', user);

    const viewInformationUser = user ? (
      <div>
        <p className={classes.aboutUserText}> {user.firstName} </p>
        <p className={classes.aboutUserText} > {user.secondName}</p>
        <p className={classes.aboutUserText} > {user.email}</p>

      </div>
    ) : (
        <div>
          <p className={classes.aboutUserText}> No First Name </p>
          <p className={classes.aboutUserText} > No Second Name</p>
          <p className={classes.aboutUserText} > No Email</p>

        </div>
      )


    return (
      <>
        <div className={classes.aboutUserContainer}>
        {viewInformationUser}
          <a href="#" className={classes.searchBtn}>Edit</a>

        </div>

      </>

    )
  }
}

export default MyProfile;
