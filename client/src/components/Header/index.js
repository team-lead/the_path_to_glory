import React, { Component } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import { SHOW_MODAL_WINDOW } from "../../actions/searchActions";
import { SHOW_DROPDOWN_MENU, HIDE_DROPDOWN_MENU } from "../../actions/dropDownMenuAction";
import DropdownHeaderMenu from "../DropdownHeaderMenu";

/* eslint-disable */
class Header extends Component {
  // onMenuItemMouseOver = () => {
  //   console.log("lesha rak"); //диспатчить событие, показывать выпадающее меню
  // };

  render() {
    const {
      searchModal,
      showSearchModal,
      showDropdownMenu,
      activeDropdownMenu,
      dropDownMenuActive,
      hideDropdownMenu
    } = this.props;
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
    console.log(showDropdownMenu);
    const logoLink = window.location.pathname === "/" ? "#" : "/";

    const showDropdownMenuItem = dropDownMenuActive ? (
      <div className={dropdownContainer}>
        <p>qwerty</p>
        <p>qwerty</p>
        <p>qwerty</p>
      </div>
    ) : null;
    return (
      <>
        <header className={header}>
          <nav className={navbarMenu}>
            <a
              href="#"
              className={navbarMenuItem}
              onMouseOver={() => showDropdownMenu(0)}
              onMouseLeave={hideDropdownMenu}>
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
        {showDropdownMenuItem}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSearchModal: state.search.showSearchModal,
    activeDropdownMenu: state.dropdownMenu.activeDropdownMenuItem,
    dropDownMenuActive: state.dropdownMenu.dropDownMenuActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchModal: () => dispatch({ type: SHOW_MODAL_WINDOW }),
    showDropdownMenu: id => dispatch({ type: SHOW_DROPDOWN_MENU, payload: id }),
    hideDropdownMenu: () => dispatch({ type: HIDE_DROPDOWN_MENU})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
