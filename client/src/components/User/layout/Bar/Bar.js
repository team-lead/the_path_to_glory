import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Hidden from '@material-ui/core/Hidden';

import PersonIcon from '@material-ui/icons/Person';

const styles = (theme) => ({
  signUpButton: {
    marginRight: theme.spacing(1)
  }
});



class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {

      menu: {
        anchorEl: null
      }
    };
  }

  // componentDidMount() {
  //   let userAuth = JSON.parse(localStorage.getItem("userAuth"));
  //   while (userAuth) {
  //     userAuth = JSON.parse(localStorage.getItem("userAuth"));
  //   }

  //   this.setState({
  //     userAuth: userAuth
  //   });

  // }



  openMenu = (event) => {
    const anchorEl = event.currentTarget;

    this.setState({
      menu: {
        anchorEl
      }
    });
  };

  closeMenu = () => {
    this.setState({
      menu: {
        anchorEl: null
      }
    });
  };

  handleSettingsClick = () => {
    this.closeMenu();
    // this.props.onSettingsClick();

  };

  handleSignOutClick = () => {
    localStorage.removeItem("userAuth");
    this.closeMenu();
    this.props.onSignOutClick();
  };

  render() {

    // Styling
    const { classes } = this.props;

    // Properties
    const { title, isPerformingAuthAction, isSignedIn, user } = this.props;

    // Events
    const { onSignUpClick, onSignInClick } = this.props;

    const { menu } = this.state;

    return (
      <React.Fragment>
        {isSignedIn &&
          <React.Fragment>
            <IconButton color="inherit" disabled={isPerformingAuthAction} onClick={this.openMenu} style={{ color: "white", fontFamily: "Josefin Sans", fontSize: "16px" }}
            >
              {user.photoURL ? <Avatar alt="Avatar" src={user.photoURL} /> : <PersonIcon style={{ color: "white", marginTop: "5px" }} />}
              {this.props.user.displayName}

            </IconButton>

            <Menu anchorEl={menu.anchorEl} open={Boolean(menu.anchorEl)} onClose={this.closeMenu}>

              <MenuItem disabled={isPerformingAuthAction} onClick={this.closeMenuhandleSettingsClick}>
                <NavLink to='/myaccount/main' style={{ textDecoration: "none", color: "white" }}>My account</NavLink>
              </MenuItem>
              <MenuItem disabled={isPerformingAuthAction} onClick={this.handleSignOutClick}> Sign out </MenuItem>
            </Menu>
          </React.Fragment>
        }

        {!isSignedIn &&

          <React.Fragment>
            <Hidden only={['sm', 'md']}>

              <IconButton
                aria-label="upload picture"
                disabled={isPerformingAuthAction}
                onClick={onSignInClick}
                style={{ fontSize: "16px", margin: "8px", fontFamily: "Josefin Sans" }}
              >
                <PermIdentity />
                SignIn
            </IconButton>

              <IconButton
                aria-label="upload picture"
                disabled={isPerformingAuthAction}
                onClick={onSignUpClick}
                style={{ fontSize: "16px", margin: "8px", fontFamily: "Josefin Sans" }}
              >
                <PersonIcon />
                SignUp
            </IconButton>

              {/* <Button className={classes.signUpButton} disabled={isPerformingAuthAction} variant="contained" onClick={onSignUpClick}>Sign Up</Button> */}
              {/* <Button color="primary" disabled={isPerformingAuthAction} variant="contained" onClick={onSignInClick}>Sign In</Button> */}
            </Hidden>
            <Hidden only={['lg','xl','xs']}>

              <IconButton
                aria-label="upload picture"
                disabled={isPerformingAuthAction}
                onClick={onSignInClick}
                style={{ fontSize: "16px", margin: "8px", fontFamily: "Josefin Sans" }}
              >
                <PermIdentity />
                SignIn
              </IconButton>



              {/* <Button className={classes.signUpButton} disabled={isPerformingAuthAction} variant="contained" onClick={onSignUpClick}>Sign Up</Button> */}
              {/* <Button color="primary" disabled={isPerformingAuthAction} variant="contained" onClick={onSignInClick}>Sign In</Button> */}
            </Hidden>
          </React.Fragment>

        }
      </React.Fragment>
    );
  }
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,

  title: PropTypes.string.isRequired,
  isPerformingAuthAction: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool.isRequired,

  onSettingsClick: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Bar);