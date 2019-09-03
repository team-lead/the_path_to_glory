import { combineReducers } from 'redux';
import { goods } from "./goodsListReducer/listGoogdsReducer"
import { activeGoodsReducer } from "./goodsListReducer/detailReducer"


const rootReducer = combineReducers({
    goods,
    active: activeGoodsReducer
})

export default rootReducer