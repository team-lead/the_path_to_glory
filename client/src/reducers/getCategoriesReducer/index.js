import { GET_GOODS_CATEGORIES } from '../../actions/getGoodsCategoryAction';

const initialState = {
  categoriesList: [],
  categoryName: ''
};

export function allCategories(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload,
        categoryName: action.payload1
      };
    default:
      return state;
  }
}