import React, { Component } from 'react';
import { connect } from 'react-redux';
import { classes } from './style';
import { SHOW_MODAL_WINDOW } from '../../actions/searchActions';

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
      searchBtn
    } = classes;

    const searchModalItem = showSearchModal ? (
      <div className={search}>
        <input
          type='text'
          placeholder='Search for item'
          className={searchInput}
        />
        <a href='#' className={searchBtn}>
          Search
        </a>
      </div>
    ) : null;
    return (
      <>
        <header className={header}>
          <nav className={navbarMenu}>
            <a href='#' className={navbarMenuItem}>
              man
            </a>
            <a href='#' className={navbarMenuItem}>
              woman
            </a>
            <a href='#' className={navbarMenuItem}>
              accessory
            </a>
          </nav>
          <div>
            <a href='#' className={logoItem}>
              Originalité
            </a>
          </div>
          <div className={headerActions}>
            <a href='#' onClick={searchModal}>
              <i className={`fas fa-search ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>Search</p>
            </a>
            <a href='#'>
              <i className={`far fa-user ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>My account</p>
            </a>
            <a href='/cart'>
              <i className={`fas fa-shopping-bag ${headerActionsItemImg}`} />
              <p className={headerActionsItemText}>Shopping Bag</p>
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
