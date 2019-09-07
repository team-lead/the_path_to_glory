import { GET_GOODS_DETAIL } from "../../actions/detailGoodsAction"

const initialState = {
    some: ["dqsdq"]
}

export const activeGoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GOODS_DETAIL:
            return {
                some: action.payload
            }

        default: 
            return state
    }
}