import React, { Component } from "react";
import { connect } from "react-redux";
import { HANDL_SHENGE_PRICE } from "../../../actions/getGoodsCategoryAction";
import {
  filterGoodsByPrice,
  getPriceRange
} from "../../../actions/filterGoods";
import InputRange from "react-input-range";
import { classes } from "./style";

class PriceSlider extends Component {
  componentDidMount() {
    this.props.getPriceRange();
  }
  render() {
    const { value, priceRange } = this.props;
    return (
      <div className={classes.priceContainer}>
        <p className={classes.priceNum}>{`$${value.min} - $${value.max}`}</p>
        <InputRange
          maxValue={priceRange.max}
          minValue={priceRange.min}
          value={value}
          onChange={value => {
            this.props.handleChange(value);
            setTimeout(() => {
              this.props.filterGoodsByPrice(value);
            }, 2000);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    value: state.allCategories.priceValue,
    priceRange: state.allGoods.priceRange
  };
};

const mapDispanchToProps = dispatch => {
  return {
    handleChange: value =>
      dispatch({
        type: HANDL_SHENGE_PRICE,
        payload: value
      }),
    filterGoodsByPrice: priceRange => dispatch(filterGoodsByPrice(priceRange)),
    getPriceRange: () => dispatch(getPriceRange())
  };
};
export default connect(
  mapStateToProps,
  mapDispanchToProps
)(PriceSlider);
