import { combineReducers } from "redux";
import { activeGoodsReducer } from "./detailGoodReducer/detailReducer";
import { allGoods } from "./getGoodsReducer";
import searchReducer from "./mainPageReducers/searchReducer";
import addToCartReducer from "./cartReducers/addToCart";
import { allCategories } from "./getCategoriesReducer/index";

const rootReducer = combineReducers({
  active: activeGoodsReducer,
  search: searchReducer,
  add: addToCartReducer,
  allGoods: allGoods,
  allCategories
});

export default rootReducer;
