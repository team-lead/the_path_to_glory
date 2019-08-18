import React, { Component } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import { SHOW_MODAL_WINDOW } from "../../../actions/searchActions";

class Header extends Component {
  render() {
    const { searchModal, showSearchModal } = this.props;

    const searchModalItem = showSearchModal ? (
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search for item"
          className={classes.searchInput}
        />
        <a href="#" className={classes.searchBtn}>Search</a>
      </div>
    ) : null;
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
            <a
              href="#"
              className={classes.headerActionsItem}
              onClick={this.props.searchModal}>
              <i className={`fas fa-search ${classes.headerActionsItemImg}`} />
              <p className={classes.headerActionsItemText}>Search</p>
            </a>
            <a href="#" className={classes.headerActionsItem}>
              <i className={`far fa-user ${classes.headerActionsItemImg}`} />
              <p className={classes.headerActionsItemText}>My account</p>
            </a>
            <a href="#" className={classes.headerActionsItem}>
              <i
                className={`fas fa-shopping-bag ${
                  classes.headerActionsItemImg
                }`}
              />
              <p className={classes.headerActionsItemText}>Shopping Bag</p>
            </a>
          </div>
        </header>
        {searchModalItem}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSearchModal: state.search.showSearchModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchModal: () => dispatch({ type: SHOW_MODAL_WINDOW })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
