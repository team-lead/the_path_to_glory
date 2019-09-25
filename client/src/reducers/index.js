import { combineReducers } from 'redux';
import { activeGoodsReducer } from "./detailGoodReducer/detailReducer"
import { allGoods } from "./getGoodsReducer/index"
import searchReducer from "./mainPageReducers/searchReducer";
import cartReducer from "./cartReducers/addToCart";
import showDropdownMenuReducer from "./mainPageReducers/dropDownMenuReducer";
import { allCategories } from "./getCategoriesReducer/index";

const rootReducer = combineReducers({
  active: activeGoodsReducer,
  search: searchReducer,
  cart: cartReducer,
  dropdownMenu: showDropdownMenuReducer,
  allGoods: allGoods,
  allCategories,
});

export default rootReducer;
