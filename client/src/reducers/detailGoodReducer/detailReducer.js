import {
  GET_GOODS_DETAIL,
  REMOVE_PRODUCT_FROM_CART,
  SET_CHECKOUT_TOTAL
} from '../../actions/detailGoodsAction';

const initialState = {
  objectId: {
    id: '',
    img: [],
    description: [],
    category: '',
    price: '',
    name: '',
    reference: '',
    new: false
  },
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
        objectId: action.payload
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const cart = state.cart.filter(product => product.id !== action.payload);
      return { ...state, cart };
    }
    case SET_CHECKOUT_TOTAL: {
      console.log(action.payload);
      return { state, checkoutTotal: action.payload };
    }
    default:
      return state;
  }
};
