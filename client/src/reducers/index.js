import { combineReducers } from "redux";
import { goods } from "./goodsListReducer/listGoogdsReducer";
import { activeGoodsReducer } from "./goodsListReducer/detailReducer";
import { combineReducers } from "redux";
import { goods } from "./goodsListReducer/listGoogdsReducer";
import { activeGoodsReducer } from "./goodsListReducer/detailReducer";
import searchReducer from "./mainPageReducers/searchReducer";
import addToCartReducer from "./cartReducers/addToCart";
import showDropdownMenuReducer from "./mainPageReducers/dropDownMenuReducer";

const rootReducer = combineReducers({
  goods,
  active: activeGoodsReducer,
  search: searchReducer,
  add: addToCartReducer,
  dropdownMenu: showDropdownMenuReducer
});

export default rootReducer;
