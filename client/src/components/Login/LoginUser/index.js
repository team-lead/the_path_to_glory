import React, { Component, Fragment } from "react";
import { classes } from "./style";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
          --SUBMITTING--
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <>
        <div className={classes.wrapper}>
          <div className={classes.formWrapper}>
            <form className={classes.form} onSubmit={this.handleSubmit} noValidate>

              <div className={classes.wrapperItem}>
                <label htmlFor={classes.email} className={classes.title}>Email</label>
                <input
                  className={classes.text}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className={classes.errorMessage}>{formErrors.email}</span>
                )}
              </div>
              <div className={classes.wrapperItem}>
                <label htmlFor={classes.password} className={classes.title} >Password</label>
                <input
                  className={classes.text}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className={classes.errorMessage}>{formErrors.password}</span>
                )}
              </div>
              <div className={classes.wrapperSaveBtn} >
                <button type="submit" className={classes.saveBtn} >Login</button>
              </div>
            </form>
          </div>
        </div>
      </>

    )
  }
}

export default LoginUser;
