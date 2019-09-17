export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart= (id) => {
    console.log("working");

    return {
        type: ADD_TO_CART,
        id
    }

};
