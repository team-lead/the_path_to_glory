import {ADD_TO_CART} from "../../../actions/cartActions";

const initialState = {
    cart: {
        product1: {
            key1: "failure",
            key2: true,
            key3: 1
        }
    }
};

function addToCartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            // логика добавления в корзину
            return {...state, product1: {key1: "success", key2: !state.cart.product1.key2, key3: state.cart.product1.key3+1},};
        }
        default: {
            return {...state};
        }
    }
}

export default addToCartReducer;
