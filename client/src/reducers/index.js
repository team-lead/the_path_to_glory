import { combineReducers } from 'redux';
import { goods } from "./goodsListReducer/listGoogdsReducer"
import { activeGoodsReducer } from "./goodsListReducer/detailReducer"
import searchReducer from "./mainPageReducers/searchReducer";



const rootReducer = combineReducers({
    goods,
    active: activeGoodsReducer,
    search: searchReducer
});

export default rootReducer;
