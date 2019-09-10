import { GET_GOODS_DETAIL } from '../../actions/detailGoodsAction';

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
  cart: [
    {
      id: 12,
      images: [],
      name: 'Gold Dress',
      reference: '3294786 - 01',
      price: 420,
      quantity: 1,
      color: 'gold',
      size: 8
    },
    {
      id: 12,
      images: [],
      name: 'Gold Dress',
      reference: '3294786 - 01',
      price: 420,
      quantity: 1,
      color: 'gold',
      size: 8
    },
    {
      id: 12,
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
    case GET_GOODS_DETAIL:
      return {
        objectId: action.payload
      };
    default:
      return state;
  }
};
