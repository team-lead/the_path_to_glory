import { combineReducers } from 'redux';
import { goods } from "./goodsListReducer/listGoogdsReducer"
import { activeGoodsReducer } from "./goodsListReducer/detailReducer"
import searchReducer from "./mainPageReducers/searchReducer";
import addToCartReducer from "./cartReducers/addToCart";



const rootReducer = combineReducers({
    goods,
    active: activeGoodsReducer,
    search: searchReducer,
    add: addToCartReducer
});

export default rootReducer;
