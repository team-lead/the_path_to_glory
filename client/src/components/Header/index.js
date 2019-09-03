import React, { Component } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import { SHOW_MODAL_WINDOW } from "../../actions/searchActions";
import DropdownHeaderMenu from "../DropdownHeaderMenu";

/* eslint-disable */
class Header extends Component {
  render() {
    const { searchModal, showSearchModal } = this.props;
    const {
      header,
      navbarMenu,
      navbarMenuItem,
      logoItem,
      headerActions,
      headerActionsItemText,
      headerActionsItemImg,
      search,
      searchInput,
      searchBtn,
      manDropdown,
      dropdownContainer
    } = classes;

    const searchModalItem = showSearchModal ? (
      <div className={search}>
        <input
          type="text"
          placeholder="Search for item"
          className={searchInput}
        />
        <a href="#" className={searchBtn}>
          Search
        </a>
      </div>
    ) : null;
    const logoLink = window.location.pathname === "/" ? "#" : "/";
    return (
      <>
        <header className={header}>
          <nav className={navbarMenu}>
            <a href="#" className={navbarMenuItem}>
              man
            </a>
            <a href="#" className={navbarMenuItem}>
              woman
            </a>
            <a href="#" className={navbarMenuItem}>
              accessory
            </a>
          </nav>
          <div>
            <a href={logoLink} className={logoItem}>
              Originalité
            </a>
          </div>
          <div className={headerActions}>
            <a href="#" onClick={searchModal}>
              <i className={`fas fa-search ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>Search</p>
            </a>
            <a href="#">
              <i className={`far fa-user ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>My account</p>
            </a>
            <a href="#">
              <i className={`fas fa-shopping-bag ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>Shopping Bag</p>
            </a>
          </div>
        </header>
        {searchModalItem}
        {/* <DropdownHeaderMenu>
          <p>qwerty</p>
          <p>qwerty</p>
          <p>qwerty</p>
        </DropdownHeaderMenu> */}
        <div className={`${dropdownContainer} ${manDropdown}`}>
          {" "}
          <p>qwerty</p>
          <p>qwerty</p>
          <p>qwerty</p>
        </div>
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
