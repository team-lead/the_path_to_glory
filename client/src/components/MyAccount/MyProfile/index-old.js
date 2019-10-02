import React, { Component } from "react";
import { classes } from "./style";
import MyAccountMenu from "../MyAccountMenu";

class MyProfile extends Component {

  state = {
    userProfile: {},

  }

  componentDidMount() {

    const urlBack = "http://localhost:8080";
    const pathProfile = "/api/profile";
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));

    const url = urlBack + pathProfile

    userAuth && fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userAuth.token
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("json", json)
        const userProfile = json
        this.setState({ "userProfile": userProfile });
      })
      .catch(error => console.error('Ошибка:', error));
  }

  render() {

    let user = this.state.userProfile;


    let {
      email = "No email",
      firstName = "No First Name",
      lastName = "No Last Name",
      phone = "No mobile phone",
      sex = "No sex",
      birthday ="No birthday"
    } = user;

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
              <p className={classes.myProfileText} > {lastName}</p>
              <h4 className={classes.myProfileTitle}>mobile phone</h4>
              <p className={classes.myProfileText} > {phone}</p>
              <h4 className={classes.myProfileTitle}>sex</h4>
              <p className={classes.myProfileText} > {sex}</p>
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
