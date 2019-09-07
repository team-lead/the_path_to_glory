import { GET_GOODS_DATA_SUCCESS } from "../../actions/goodsListAction"


const initialState = {
    goodsList: []
}

export function goods(state = initialState, action) {
    switch (action.type) {
        case GET_GOODS_DATA_SUCCESS:
            return {
                goodsList: action.payload
            }
        default:
            return state
    }
}