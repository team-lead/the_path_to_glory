import {ADD_TO_CART} from "../../../actions/cartActions";

const initialState =
     [
        {
            category: "Category",
            images: [],
            name: "Леопардовые",
            subCategory: "Труселя",
            ref: String,
            description: Array,
            new: Boolean,
            price: Number,
            quantity: Number
        }
    ];


export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            // логика добавления в корзину
            return {
                ...state, cart: {name: "Труселя оделись", id: action.id}
            }
        }
        default: {
            return {...state};
        }
    }
}

export default cartReducer;
