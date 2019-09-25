import {
    GET_GOODS_CATEGORIES,
    SHOW_FILTER_MENU,
    SHOW_CATEGORU_MENU,
    WINDOW_DESCTOP,
    SHOW_COLOR_MENU,
    SHOW_PRICE_MENU
  } from '../../actions/getGoodsCategoryAction';

const initialState = {
  colorsList: [],
  categoriesList: [],
  categoryName: '',
  isShowFilterMenu: false,
  isShowCategoriMenu:true,
  isShowColorMenu:true,
  isShowPriceMenu:true,
};

export function allCategories(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_CATEGORIES:{
      return {
        ...state,
        categoriesList: action.payload,
        categoryName: action.payload1,
        colorsList: action.payload2
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
    case SHOW_PRICE_MENU:{
      return{
        ...state,
        isShowPriceMenu:!state.isShowPriceMenu
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