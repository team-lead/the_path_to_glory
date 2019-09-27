/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { classes } from "./style";
import { SHOW_MODAL_WINDOW, searchGoods } from "../../actions/searchActions";
import {
  SHOW_DROPDOWN_MENU,
  HIDE_DROPDOWN_MENU
} from "../../actions/dropDownMenuAction";
import DropdownHeaderMenu from "../DropdownHeaderMenu";
import ProductItemSearch from "../ProductItemSearch";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleChange({ target }) {
    this.props.searchAction(target.value);
    this.setState({ searchText: target.value });
  }
  clearSearch() {
    this.setState({ searchText: "" });
  }
  render() {
    const {
      searchModal,
      showSearchModal,
      showDropdownMenu,
      activeDropdownMenu,
      hideDropdownMenu,
      searchResults
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
      dropdownMenuItem,
      dropdownMenuItemGender,
      clearSearchBtn,
      searchBlock,
      productItemSearch,
      resultCount
    } = classes;

    // console.log(searchResults);
    const searchResultsView = this.state.searchText ? (
      <div>
        {searchResults.length ? (
          <p className={resultCount}>{`Results: ${searchResults.length}`}</p>
        ) : (
          <p
            className={resultCount}>{`"${this.state.searchText}" not found`}</p>
        )}
        <div className={productItemSearch}>
          <ProductItemSearch goodsList={searchResults} />
        </div>
      </div>
    ) : null;

    const searchModalItem = showSearchModal ? (
      <div className={search} onMouseLeave={searchModal}>
        <div className={searchBlock}>
          <input
            type="text"
            placeholder="Search for item"
            className={searchInput}
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <i
            className={`fas fa-times ${clearSearchBtn}`}
            onClick={this.clearSearch}
          />
        </div>
        {searchResultsView}
        {/* <a href="#" className={searchBtn}>
          Search
        </a> */}
      </div>
    ) : null;

    const logoLink = window.location.pathname === '/' ? '#' : '/';
    console.log('----', typeof activeDropdownMenu);

    let showDropdownMenuItem = null;

    switch (activeDropdownMenu) {
      case 0: {
        showDropdownMenuItem = (
          <DropdownHeaderMenu
            title={"CATEGORIES"}
            onMouseOver={() => showDropdownMenu(0)}
            onMouseLeave={hideDropdownMenu}>
            <div>
              <a className={dropdownMenuItem} href="#">
                New arrivals
              </a>
              <a className={dropdownMenuItem} href="/product-list/mens/shirts">
                Shirts
              </a>
              <a className={dropdownMenuItem} href="/product-list/mens/coats">
                Coats
              </a>
              <a className={dropdownMenuItem} href="/product-list/mens/jackets">
                Jackets
              </a>
              <a className={dropdownMenuItem} href="/product-list/mens/sweaters">
                Sweaters
              </a>
            </div>
            <div>
              <a className={dropdownMenuItem} href="/product-list/mens/polos">
                Polos & Tees
              </a>
              <a className={dropdownMenuItem} href="/product-list/mens/jeans">
                Jeans & Pants
              </a>
              <a className={dropdownMenuItem} href="/product-list/mens/outerwear">
                Outerwear
              </a>
            </div>
          </DropdownHeaderMenu>
        );
        break;
      }
      case 1: {
        showDropdownMenuItem = (
          <DropdownHeaderMenu
            title={"CATEGORIES"}
            onMouseOver={() => showDropdownMenu(1)}
            onMouseLeave={hideDropdownMenu}>
            <div>
              <a className={dropdownMenuItem} href="#">
                New arrivals
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/dresses">
                Dresses
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/knitwear">
                Knitwear
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/coats">
                Coats
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/jackets">
                Jackets
              </a>
            </div>
            <div>
              <a className={dropdownMenuItem} href="/product-list/womens/suits">
                Suits & Combined
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/t-shits">
                T-shirts
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/jeans">
                Jeans
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/skirts">
                Skirts
              </a>
              <a className={dropdownMenuItem} href="/product-list/womens/underwear">
                Underwear
              </a>
            </div>
          </DropdownHeaderMenu>
        );
        break;
      }
      case 2: {
        showDropdownMenuItem = (
          <DropdownHeaderMenu
            title={"CATEGORIES"}
            onMouseOver={() => showDropdownMenu(2)}
            onMouseLeave={hideDropdownMenu}>
            <div>
              <a
                className={`${dropdownMenuItem} ${dropdownMenuItemGender}`}
                href="#">
                For Woman
              </a>
              <a className={dropdownMenuItem} href="/product-list/man/bags">
                Bags
              </a>
              <a className={dropdownMenuItem} href="/product-list/man/wallets">
                Waletts
              </a>
              <a className={dropdownMenuItem} href="/product-list/man/belts">
                Belts
              </a>
              <a className={dropdownMenuItem} href="/product-list/man/scraves">
                Scarves & hats
              </a>
              <a className={dropdownMenuItem} href="/product-list/man/sunglasses">
                Sunglasses
              </a>
            </div>
            <div>
              <a
                className={`${dropdownMenuItem} ${dropdownMenuItemGender}`}
                href="#">
                For Man
              </a>
              <a className={dropdownMenuItem} href="/product-list/woman/bags">
                Bags
              </a>
              <a className={dropdownMenuItem} href="/product-list/woman/wallets">
                Waletts, Card Cases
              </a>
              <a className={dropdownMenuItem} href="/product-list/woman/belts">
                Belts
              </a>
              <a className={dropdownMenuItem} href="/product-list/woman/ties">
                Ties & Cummerbunds
              </a>
              <a className={dropdownMenuItem} href="/product-list/woman/sunglasses">
                Sunglasses
              </a>
            </div>
          </DropdownHeaderMenu>
        );
        break;
      }
      default: {
      }
    }

    return (
      <>
        <header className={header}>
          <nav className={navbarMenu}>
            <a
              href="/product-list/mens"
              className={navbarMenuItem}
              onMouseOver={() => showDropdownMenu(0)}>
              man
            </a>
            <a
              href="/product-list/womens"
              className={navbarMenuItem}
              onMouseOver={() => showDropdownMenu(1)}>
              woman
            </a>
            <a
              href="/product-list/accessories"
              className={navbarMenuItem}
              onMouseOver={() => showDropdownMenu(2)}>
              accessory
            </a>
          </nav>
          <div onMouseOver={hideDropdownMenu}>
            <a href={logoLink} className={logoItem}>
              Originalité
            </a>
          </div>
          <div className={headerActions}>
            <NavLink
              href="#"
              onClick={searchModal}
              onMouseOver={hideDropdownMenu}>
              <i className={`fas fa-search ${headerActionsItemImg}`} />
              <p className={classes.headerActionsItemText}>Search</p>
            </NavLink>
            <NavLink to='/myaccount/main' className={classes.headerActionsItem}>
              <i className={`far fa-user ${headerActionsItemImg}`} />
              <p className={classes.headerActionsItemText}>My account</p>
            </NavLink>
            <a href='#' className={classes.headerActionsItem}>
              <i
                className={`fas fa-shopping-bag ${classes.headerActionsItemImg}`}
              />
              <p className={classes.headerActionsItemText}>Shopping Bag</p>
            </a>
          </div>
        </header>
        {searchModalItem}
        {showDropdownMenuItem}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSearchModal: state.search.showSearchModal,
    activeDropdownMenu: state.dropdownMenu.activeDropdownMenuItem,
    dropDownMenuActive: state.dropdownMenu.dropDownMenuActive,
    searchResults: state.search.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchModal: () => dispatch({ type: SHOW_MODAL_WINDOW }),
    showDropdownMenu: id => dispatch({ type: SHOW_DROPDOWN_MENU, payload: id }),
    hideDropdownMenu: () => dispatch({ type: HIDE_DROPDOWN_MENU }),
    searchAction: searchKeywords => dispatch(searchGoods(searchKeywords))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
