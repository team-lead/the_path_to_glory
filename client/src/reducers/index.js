import { combineReducers } from 'redux';
<<<<<<< HEAD
import { goods } from "./goodsListReducer/listGoogdsReducer"
import { activeGoodsReducer } from "./goodsListReducer/detailReducer"
import searchReducer from "./mainPageReducers/searchReducer";
import addToCartReducer from "./cartReducers/addToCart";



const rootReducer = combineReducers({
    goods,
    active: activeGoodsReducer,
    search: searchReducer,
    add: addToCartReducer
=======
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
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
});

export default rootReducer;
