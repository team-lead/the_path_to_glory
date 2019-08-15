import React from "react";
import { classes } from "./style";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbarMenu}>
          <a href="#" className={classes.navbarMenuItem}>
            man
          </a>
          <a href="#" className={classes.navbarMenuItem}>
            woman
          </a>
          <a href="#" className={classes.navbarMenuItem}>
            accessory
          </a>
        </nav>
        <div>
          <a href="#" className={classes.logoItem}>
            Originalité
          </a>
        </div>
        <div className={classes.headerActions}>
          <a href="#" className={classes.headerActionsItem}>
            <i className={`fas fa-search ${classes.headerActionsItemImg}`} />
            <p className={classes.headerActionsItemText}>Search</p>
          </a>
          <a href="#" className={classes.headerActionsItem}>
            <i className={`far fa-user ${classes.headerActionsItemImg}`} />
            <p className={classes.headerActionsItemText}>My account</p>
          </a>
          <a href="#" className={classes.headerActionsItem}>
            <i className={`fas fa-shopping-bag ${classes.headerActionsItemImg}`} />
            <p className={classes.headerActionsItemText}>Shopping Bag</p>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
