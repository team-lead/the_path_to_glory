import { combineReducers } from "redux";
// import { goods } from "./goodsListReducer/listGoogdsReducer";
import { activeGoodsReducer } from "./detailGoodReducer/detailReducer"
import { allGoods } from "./getGoodsReducer/index"
import searchReducer from "./mainPageReducers/searchReducer";
import addToCartReducer from "./cartReducers/addToCart";
import showDropdownMenuReducer from "./mainPageReducers/dropDownMenuReducer";

const rootReducer = combineReducers({
  active: activeGoodsReducer,
  search: searchReducer,
  add: addToCartReducer,
  dropdownMenu: showDropdownMenuReducer,
  allGoods: allGoods
});

export default rootReducer;
