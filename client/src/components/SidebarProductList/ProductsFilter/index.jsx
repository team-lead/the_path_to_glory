import React, { Component } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import RangeSlider from "../RangeSlider";
import { filterGoodsByColor } from "../../../actions/filterGoodsByColor";
import { filterGoodsByPrice } from "../../../actions/rangeSliderAction";
import { getGoods } from "../../../actions/getGoodsAction";

class ProductsFilter extends Component {
  componentDidMount() {
    this.props.filterByPrice();
  }
  render() {
    const {
      categorySection,
      sectionTitle,
      categorySectionTitle,
      categorySectionItem,
      sectionItem,
      colorSection,
      colorSectionTitle,
      colorSectionItem,
      colorCircle,
      colorItem,
      priceSection,
      priceSectionTitle,
      priceDiapazon
    } = classes;

    const categories = this.props.categories;
    const items = categories.map(category => (
      <li key={category}>
        <a href="#" className={`${categorySectionItem} ${sectionItem}`}>
          {category}
        </a>
      </li>
    ));
    const colors = this.props.colors;
    const colorItems = colors.map(color => (
      <li
        key={color}
        className={colorItem}
        onClick={() => this.props.filterByColor(color)}>
        <div className={`${colorCircle} ${color}`}></div>
        <span className={`${sectionItem} ${colorSectionItem}`}>{color}</span>
      </li>
    ));
    const whatProductsFilterReset = window.location.pathname
      .split("/")
      .includes("mens")
      ? () => this.props.getGoods("mens")
      : () => this.props.getGoods("womens");
    const hideProductsFilter = window.location.pathname
      .split("/")
      .includes("accessories") ? null : (
      <div className={colorSection}>
        <p className={`${sectionTitle} ${colorSectionTitle}`}>colors</p>
        <ul>{colorItems}</ul>
        <span
          className={`${categorySectionItem} ${sectionItem}`}
          onClick={whatProductsFilterReset}>
          Reset All
        </span>
      </div>
    );

    return (
      <div>
        <div className={categorySection}>
          <p className={`${categorySectionTitle} ${sectionTitle}`}>woman</p>
          <a href="#" className={`${categorySectionItem} ${sectionItem}`}>
            View All
          </a>
          <ul>{items}</ul>
        </div>
        {hideProductsFilter}
        <div className={priceSection}>
          <p className={`${sectionTitle} ${priceSectionTitle}`}>price</p>
          <p
            className={
              priceDiapazon
            }>{`$${this.props.minPrice} - $${this.props.maxPrice}`}</p>
          <RangeSlider
            filter={this.props.filterByPrice}
            max={this.props.maxPrice}
            min={this.props.minPrice}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    minPrice: state.rangeSlider.min,
    maxPrice: state.rangeSlider.max
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterByColor: color => dispatch(filterGoodsByColor(color)),
    getGoods: url => dispatch(getGoods(url)),
    filterByPrice: () => dispatch(filterGoodsByPrice())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsFilter);
