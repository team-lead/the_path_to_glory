import {ADD_TO_CART} from "../../../actions/cartActions";

const initialState = {
    cart: {
        product1: {
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
    }
};

function addToCartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
        // логика добавления в корзину
            return {...state, product1: {name: "Труселя оделись", id: action.id, new: !state.cart.product1.new},};
        }
        default: {
            return {...state};
        }
    }
}

export default addToCartReducer;
