import {ADD_TO_CART} from "../../../actions/cartActions";


// const initialState =
//
//      [
//         {
//             category: "Category",
//             images: [],
//             name: "Леопардовые",
//             subCategory: "Труселя",
//             ref: String,
//             description: Array,
//             new: Boolean,
//             price: Number,
//             quantity: Number
//         }
//     ];

let initialState = {
    inCart: {}
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {

            const changedValues = {
                ...state.inCart,
                [action.payload.id]: action.payload,
            };
            window.localStorage.setItem('cart', JSON.stringify(state));
            return {
                ...state,
                loading: true,
                inCart: changedValues,
            };
        }
        default: {
            return state
        }
    }
}

export default cartReducer;
