import {
    SHOW_FILTER_MENU,
    SHOW_CATEGORU_MENU,
    WINDOW_DESCTOP,
} from "../../actions/showFilterMenuAction"

const initialState = {
    isShowFilterMenu: true,
    isShowCategoriMenu:false
}

const showFilterMenu = (state = initialState , action)=>{
switch (action.type){
    case SHOW_FILTER_MENU:{
        return{
            ...state,
            isShowFilterMenu:!state.isShowFilterMenu,
            isShowCategoriMenu:false
        }
    }
    case SHOW_CATEGORU_MENU:{
        return{
            ...state,
            isShowCategoriMenu:!state.isShowCategoriMenu,

        }
    }
    case WINDOW_DESCTOP:{
        return{
            ...state,
            isShowFilterMenu:false,
            isShowCategoriMenu:true
        }
    }
    default:{
        return{...state}
    }
}
};
export default showFilterMenu;