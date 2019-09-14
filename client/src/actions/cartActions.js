export const ADD_TO_CART = "ADD_TO_CART";

export function addToCart(id) {
    console.log("working");

    return {
        type: ADD_TO_CART,
        payload: id,
    }

}
