import React, { Component } from "react";
import { classes } from "./style";
import MyAccountMenu from "../MyAccountMenu";


class MyProfile extends Component {
  render() {

    // const { user } = this.props;

    let user = undefined;

    console.log('----', user);

    user = {};
      user.email = "email@gmail.com";
      user.firstName = "FirstName";
      user.secondName = "SecondName";
      user.phone = "+380508765544";
      user.gender = "male"
      user.birthday = "10-12-2000";

    if (!user) {
      user = {};
      user.email = "No email";
      user.firstName = "No firstName";
      user.secondName = "No secondName";
      user.phone = "No mobile phone";
      user.gender = "No gender"
      user.birthday = "No birthday";
    }

    let { email, firstName, secondName, phone, gender, birthday } = user;

    return (
      <>
        <div className={classes.container}>
          <MyAccountMenu />
          <div className={classes.myProfileContainer}>

            <div >
              <h4 className={classes.myProfileTitle}>EMAIL ADRESS</h4>
              <p className={classes.myProfileText} > {email}</p>
              <h4 className={classes.myProfileTitle} >first Name</h4>
              <p className={classes.myProfileText}> {firstName} </p>
              <h4 className={classes.myProfileTitle}>second Name</h4>
              <p className={classes.myProfileText} > {secondName}</p>             
              <h4 className={classes.myProfileTitle}>mobile phone</h4>
              <p className={classes.myProfileText} > {phone}</p>
              <h4 className={classes.myProfileTitle}>gender</h4>
              <p className={classes.myProfileText} > {gender}</p>
              <h4 className={classes.myProfileTitle} >birthday</h4>
              <p className={classes.myProfileText} > {birthday}</p>
            </div>
            <button className={classes.saveBtn}>save</button>
          </div>
        </div>
      </>

    )
  }
}

export default MyProfile;
