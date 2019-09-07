import {
  SHOW_DROPDOWN_MENU,
  HIDE_DROPDOWN_MENU
} from "../../../actions/dropDownMenuAction";

const initalState = {
  activeDropdownMenuItem: null,
  dropDownMenuActive: false
};

function showDropdownMenuReducer(state = initalState, action) {
  switch (action.type) {
    case SHOW_DROPDOWN_MENU: {
      return {
        ...state,
        activeDropdownMenuItem: action.payload,
        dropDownMenuActive: true
      };
    }
    case HIDE_DROPDOWN_MENU: {
      return {
        ...state,
        // activeDropdownMenuItem: action.payload,
        // dropDownMenuActive: false
      };
    }
    default: {
      return { ...state };
    }
  }
}

export default showDropdownMenuReducer;
