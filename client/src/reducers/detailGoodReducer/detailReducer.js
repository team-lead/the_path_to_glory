import {
  GET_GOODS_DETAIL,
  REMOVE_PRODUCT_FROM_CART,
  SET_CHECKOUT_TOTAL,
  DEC_CART_PRODUCT_QUANTITY,
  INC_CART_PRODUCT_QUANTITY,
  SAVE_USER_CART,
  UPDATE_CART
} from '../../actions/detailGoodsAction';

const initialState = {
  objectId: [],
  checkoutTotal: 0,
  purchaseHistory: [],
  shoppingBag: localStorage.getItem('shoppingBag')
    ? JSON.parse(localStorage.getItem('shoppingBag'))
    : []
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
      const shoppingBag = state.shoppingBag.filter(
        product => product.id !== action.payload
      );
      return { ...state, shoppingBag };
    }
    case SET_CHECKOUT_TOTAL: {
      const checkoutTotal = action.payload;
      return { ...state, checkoutTotal };
    }
    case INC_CART_PRODUCT_QUANTITY: {
      const shoppingBag = state.shoppingBag.map(product => {
        return product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product };
      });
      return { ...state, shoppingBag };
    }
    case DEC_CART_PRODUCT_QUANTITY: {
      const shoppingBag = state.shoppingBag.map(product => {
        return product.id === action.payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : { ...product };
      });
      return { ...state, shoppingBag };
    }
    case SAVE_USER_CART: {
      localStorage.setItem('shoppingBag', JSON.stringify(state.shoppingBag));
      return { ...state };
    }
    case UPDATE_CART: {
      return { ...state, shoppingBag: action.payload };
    }
    default:
      return { ...state };
  }
};
