import React, { Fragment } from "react";
import { classes } from "./style";

const Footer = () => {
  const { footer, footerItem, footerLink, footerItemTitle } = classes;
  return (
    <Fragment>
      <footer className={footer}>
        <div className={footerItem}>
          <p className={footerItemTitle}>HELP</p>
<<<<<<< HEAD
          <a className={footerLink} href="#">
            Frequently asked questions
          </a>
          <a className={footerLink} href="#">
            Contact
          </a>
          <a className={footerLink} href="#">
            How to purchase
          </a>
          <a className={footerLink} href="#">
=======
          <a className={footerLink} href="/">
            Frequently asked questions
          </a>
          <a className={footerLink} href="/">
            Contact
          </a>
          <a className={footerLink} href="/">
            How to purchase
          </a>
          <a className={footerLink} href="/">
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
            Payment
          </a>
        </div>
        <div className={footerItem}>
          <p className={footerItemTitle}>FOLLOW US</p>
<<<<<<< HEAD
          <a className={footerLink} href="#">
            Facebook
          </a>
          <a className={footerLink} href="#">
            Instagram
          </a>
          <a className={footerLink} href="#">
=======
          <a className={footerLink} href="/">
            Facebook
          </a>
          <a className={footerLink} href="/">
            Instagram
          </a>
          <a className={footerLink} href="/">
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
            Pinterest
          </a>
        </div>
        <div className={footerItem}>
          <p className={footerItemTitle}>COMPANY</p>
<<<<<<< HEAD
          <a className={footerLink} href="#">
            History of the brand
          </a>
          <a className={footerLink} href="#">
            Policy
          </a>
          <a className={footerLink} href="#">
=======
          <a className={footerLink} href="/">
            History of the brand
          </a>
          <a className={footerLink} href="/">
            Policy
          </a>
          <a className={footerLink} href="/">
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
            Work with Us
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
