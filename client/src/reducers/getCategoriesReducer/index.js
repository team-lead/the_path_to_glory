import { GET_GOODS_CATEGORIES } from '../../actions/getGoodsCategoryAction';
// import { getGoodsColors } from "../../actions/getGoodsColorsActions"

const initialState = {
  categoriesList: [],
  categoryName: '',
  colorsList: []
};

export function allCategories(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload,
        categoryName: action.payload1,
        colorsList: action.payload2
      };
    default:
      return state;
  }
}