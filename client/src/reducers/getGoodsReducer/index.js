import { GET_GOODS_SUCCESS } from "../../actions/getGoodsAction";
import {
  GET_GOODS_BY_CATEGORY,
  FILTER_GOODS_BY_COLOR,
  FILTER_GOODS_BY_PRICE,
  GET_PRICE_RANGE,
  FILTER_GOODS_BY_SUBCATEGORY,
  SHOW_PRELOADER
} from "../../actions/filterGoods";

const initialState = {
  goodsList: [],
  priceRange: {},
  showPreloader: false
};

export function allGoods(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_SUCCESS:
      return {
        ...state,
        goodsList: action.payload
      };
    case GET_GOODS_BY_CATEGORY:
      return {
        ...state,
        goodsList: action.payload
      };
    // case GET_GOODS_BY_SUBCATEGORY:
    //   return {
    //     ...state,
    //     goodsList: action.payload
    //   };
    case FILTER_GOODS_BY_COLOR:
      return {
        ...state,
        goodsList: action.payload
      };
    case FILTER_GOODS_BY_PRICE:
      return {
        ...state,
        goodsList: action.payload
      };
    case FILTER_GOODS_BY_SUBCATEGORY:
      return {
        ...state,
        goodsList: action.payload
      };
    case GET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload
      };
    case SHOW_PRELOADER:
      return {
        ...state,
        showPreloader: !state.showPreloader
      };
    default:
      return state;
  }
}
