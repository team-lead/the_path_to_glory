import { GET_GOODS_SUCCESS } from "../../actions/getGoodsAction"

const initialState = {
    goodsList: []
}

export function allGoods(state = initialState, action) {
    switch (action.type) {
        case GET_GOODS_SUCCESS:
            return {
                ...state, goodsList: action.payload
            }
        default:
            return state
    }
}
