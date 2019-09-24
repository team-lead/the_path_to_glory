export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart= (payload) => {
    console.log("working");

    return {
        type: ADD_TO_CART,
        payload
    }

};
