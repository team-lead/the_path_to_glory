import {GET_GOODS_DETAIL} from "../../actions/detailGoodsAction"

const initialState = {
    cart: [{
        id: "resul",
        img: [],
        description: [],
        category: "",
        price: "",
        name: "",
        ref: "",
        new: false
    }],
};

export const activeGoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GOODS_DETAIL:
            return {
                objectId: action.payload
            }
        default:
            return state
    }
}