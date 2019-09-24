import {
    GET_GOODS_CATEGORIES,
    SHOW_FILTER_MENU,
    SHOW_CATEGORU_MENU,
    WINDOW_DESCTOP,
    SHOW_COLOR_MENU,
 } from '../../actions/getGoodsCategoryAction';

const initialState = {
  categoriesList: [],
  categoryName: '',
  isShowFilterMenu: false,
  isShowCategoriMenu:true,
  isShowColorMenu:true,
};

export function allCategories(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_CATEGORIES:{
      return {
        ...state,
        categoriesList: action.payload,
        categoryName: action.payload1
      }
    }
      case SHOW_FILTER_MENU:{
        return{
            ...state,
            isShowFilterMenu:!state.isShowFilterMenu,
            isShowCategoriMenu:false,
            isShowColorMenu:false,
        }
    }
    case SHOW_CATEGORU_MENU:{
        return{
            ...state,
            isShowCategoriMenu:!state.isShowCategoriMenu,
        }
    }
    case SHOW_COLOR_MENU:{
      return{
        ...state,
        isShowColorMenu: !state.isShowColorMenu
      }
    }
    case WINDOW_DESCTOP:{
        return{
            ...state,
            isShowFilterMenu:false,
            isShowCategoriMenu:true
        }
    }
    default:
      return state;
  }
}