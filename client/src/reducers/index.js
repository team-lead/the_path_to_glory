import { combineReducers } from "redux";
import { activeGoodsReducer } from "./detailGoodReducer/detailReducer";
import { allGoods } from "./getGoodsReducer";
import searchReducer from "./mainPageReducers/searchReducer";
// import addToCartReducer from "./cartReducers/addToCart";
import { allCategories } from "./getCategoriesReducer/index";
import rangeSliderReducer from "./rangeSliderReducer";
import { getFilterPath } from "./getFilterPathReducers"

const rootReducer = combineReducers({
  active: activeGoodsReducer,
  search: searchReducer,
  // add: addToCartReducer,
  allGoods: allGoods,
  rangeSlider: rangeSliderReducer,
  allCategories,
  getFilterPath
});

export default rootReducer;
