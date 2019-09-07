export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (id, count) => (
    {
        type: 'ADD_TO_CART',
        id: id,
        count: count,
    }
);