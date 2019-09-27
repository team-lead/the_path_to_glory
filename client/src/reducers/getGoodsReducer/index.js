import { GET_GOODS_SUCCESS } from "../../actions/getGoodsAction"
import { GET_GOODS_BY_CATEGORY } from "../../actions/filterGoodsByCategory"
import { FILTER_GOODS_BY_COLOR } from "../../actions/filterGoodsByColor"

const initialState = {
    goodsList: []
}

export function allGoods(state = initialState, action) {
    switch (action.type) {
        case GET_GOODS_SUCCESS:
            return {
                ...state, goodsList: action.payload
            }
        case GET_GOODS_BY_CATEGORY:
            return {
                ...state, goodsList: action.payload
            }
        case FILTER_GOODS_BY_COLOR:
            return {
                ...state, goodsList: action.payload
            }
        default: 
            return state
    }
}
