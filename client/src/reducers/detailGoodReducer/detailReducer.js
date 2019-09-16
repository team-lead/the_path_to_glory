import { GET_GOODS_DETAIL } from "../../actions/detailGoodsAction"

const initialState = {
    objectId: []
}

export const activeGoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GOODS_DETAIL:
            return {
                ...state, objectId: action.payload
            }
        default: 
            return state
    }
}