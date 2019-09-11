import React, { Component } from "react";
import { classes } from "./style";
import MyAccountMenu from "../MyAccountMenu";


class MyProfile extends Component {
  
  state = {
      user: null,
      id: '5d777dbc30ebd8186804e67e'
    }
  
  componentDidMount() {
    
    fetch('http://localhost:8080/users/'+this.state.id)
      .then(response => response.json())
      .then(json => {
        this.setState({ user: json });
      });
  }

  render() {

    let user = this.state.user;

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
              <p  className={classes.myProfileText} > {email}</p>
              <h4 className={classes.myProfileTitle} >first Name</h4>
              <p  className={classes.myProfileText}> {firstName} </p>
              <h4 className={classes.myProfileTitle}>second Name</h4>
              <p  className={classes.myProfileText} > {secondName}</p>
              <h4 className={classes.myProfileTitle}>mobile phone</h4>
              <p  className={classes.myProfileText} > {phone}</p>
              <h4 className={classes.myProfileTitle}>gender</h4>
              <p  className={classes.myProfileText} > {gender}</p>
              <h4 className={classes.myProfileTitle} >birthday</h4>
              <p  className={classes.myProfileText} > {birthday}</p>
            </div>
            <button className={classes.saveBtn}>save</button>
          </div>
        </div>
      </>

    )
  }
}

export default MyProfile;
