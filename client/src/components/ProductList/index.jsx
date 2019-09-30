import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import { classes } from "./style";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { SHOW_FILTER_MENU } from "../../actions/getGoodsCategoryAction";
class ProductList extends Component {
  render() {
    const { productListContainer, categoryName, productList, filter } = classes;

    const nameCategory = () => {
      if (window.location.pathname === "/product-list/mens") {
        return "Man";
      } else if (window.location.pathname === "/product-list/womens") {
        return "Woman";
      } else if (window.location.pathname === "/product-list/accessories") {
        return "Accessory";
      }
    };
    // const preloader = this.props.showPreloader ? (
    //   <p>Loading...</p>
    // ) : (
    //   <ProductItem />
    // );
    return (
      <div className={productListContainer}>
        <h3 className={categoryName}>{nameCategory()}</h3>
        <h3 className={filter} onClick={() => this.props.showFilter()}>
          Filters
        </h3>
        <ul className={productList}>
          {/* {preloader} */}
          <ProductItem />
        </ul>
        <ScrollUpButton />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    showPreloader: state.allGoods.showPreloader
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showFilter: () => dispatch({ type: SHOW_FILTER_MENU })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
