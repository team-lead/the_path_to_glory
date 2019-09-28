/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { classes } from "./style";
import { SHOW_MODAL_WINDOW, searchGoods } from "../../actions/searchActions";
import { setPrevPagePath } from "../../actions/detailGoodsAction";
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
      searchResults,
      setPrevPagePath
    } = this.props;

    const {
      header,
      navbarMenu,
      navbarMenuItem,
      logoItem,
      headerActions,
      headerActionsItemImg,
      search,
      searchInput,
      clearSearchBtn,
      headerActionsItemText,
      searchBlock,
      productItemSearch,
      resultCount,
      headerActionsItem
    } = classes;

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
      </div>
    ) : null;

    return (
      <>
        <header className={header}>
          <nav className={navbarMenu}>
            <NavLink to="/product-list/mens" className={navbarMenuItem}>
              man
            </NavLink>
            <NavLink to="/product-list/womens" className={navbarMenuItem}>
              woman
            </NavLink>
            <NavLink to="/product-list/accessories" className={navbarMenuItem}>
              accessory
            </NavLink>
          </nav>
          <div>
            <NavLink to="/" className={logoItem}>
              Originalité
            </NavLink>
          </div>
          <div className={headerActions}>
            <NavLink onClick={searchModal}>
              <i className={`fas fa-search ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>Search</p>
            </NavLink>
            <NavLink to="/myaccount/main" className={headerActionsItem}>
              <i className={`far fa-user ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>My account</p>
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => {
                setPrevPagePath(document.location.pathname);
              }}
              className={headerActionsItem}>
              <i className={`fas fa-shopping-bag ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>Shopping Bag</p>
            </NavLink>
          </div>
        </header>
        {searchModalItem}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSearchModal: state.search.showSearchModal,
    searchResults: state.search.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchModal: () => dispatch({ type: SHOW_MODAL_WINDOW }),
    searchAction: searchKeywords => dispatch(searchGoods(searchKeywords)),
    setPrevPagePath: path => dispatch(setPrevPagePath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
