import React, { Component } from "react";
import { connect } from "react-redux";
import { HANDL_SHENGE_PRICE } from "../../../actions/getGoodsCategoryAction";
import { filterGoodsByPrice } from "../../../actions/filterGoods";
import InputRange from "react-input-range";
import { classes } from "./style";

class PriceSlider extends Component {
  render() {
    const { value } = this.props;
    console.log(value);
    return (
      <div className={classes.priceContainer}>
        <p
          className={
            classes.priceNum
          }>{`$${this.props.value.min} - $${this.props.value.max}`}</p>
        <InputRange
          maxValue={1000}
          minValue={0}
          value={value}
          onChange={value => {
            this.props.handleChange(value);
            this.props.filterGoodsByPrice(value);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    value: state.allCategories.priceValue,
    priceRange: state.allGoods.priceValue
  };
};

const mapDispanchToProps = dispatch => {
  return {
    handleChange: value =>
      dispatch({
        type: HANDL_SHENGE_PRICE,
        payload: value
      }),
    filterGoodsByPrice: priceRange => dispatch(filterGoodsByPrice(priceRange))
  };
};
export default connect(
  mapStateToProps,
  mapDispanchToProps
)(PriceSlider);
