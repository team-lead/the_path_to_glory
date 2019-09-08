import { combineReducers } from 'redux';
import { activeGoodsReducer } from "./detailGoodReducer/detailReducer"
import { allGoods } from "./getGoodsReducer/index"
import searchReducer from "./mainPageReducers/searchReducer";



const rootReducer = combineReducers({
    active: activeGoodsReducer,
    search: searchReducer,
    allGoods: allGoods
})

export default rootReducer;
