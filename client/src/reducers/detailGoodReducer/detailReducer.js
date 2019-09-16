import {
  GET_GOODS_DETAIL,
  REMOVE_PRODUCT_FROM_CART,
  SET_CHECKOUT_TOTAL,
  DEC_CART_PRODUCT_QUANTITY,
  INC_CART_PRODUCT_QUANTITY
} from '../../actions/detailGoodsAction';

const initialState = {
  objectId: [],
  checkoutTotal: 0,
  cart: [
    {
      id: 126,
      images: [],
      name: 'Gold Dress',
      reference: '3294786 - 01',
      price: 420,
      quantity: 1,
      color: 'gold',
      size: 8
    },
    {
      id: 121,
      images: [],
      name: 'Gold Dress',
      reference: '3294786 - 01',
      price: 420,
      quantity: 1,
      color: 'gold',
      size: 8
    },
    {
      id: 124,
      images: [],
      name: 'Gold Dress',
      reference: '3294786 - 01',
      price: 420,
      quantity: 1,
      color: 'gold',
      size: 8
    }
  ]
};

export const activeGoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS_DETAIL: {
      return {
        ...state,
        objectId: action.payload
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const cart = state.cart.filter(product => product.id !== action.payload);
      return { ...state, cart };
    }
    case SET_CHECKOUT_TOTAL: {
      const checkoutTotal = action.payload;
      return { ...state, checkoutTotal };
    }
    case INC_CART_PRODUCT_QUANTITY: {
      const cart = state.cart.map(product => {
        return product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product };
      });
      return { ...state, cart };
    }
    case DEC_CART_PRODUCT_QUANTITY: {
      const cart = state.cart.map(product => {
        return product.id === action.payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : { ...product };
      });
      return { ...state, cart };
    }
    default:
      return { ...state };
  }
};
