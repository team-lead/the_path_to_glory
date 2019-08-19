import { SHOW_MODAL_WINDOW } from "../../../actions/searchActions";

const initalState = {
  showSearchModal: false
};

function searchReducer(state = initalState, action) {
  switch (action.type) {
    case SHOW_MODAL_WINDOW: {
      return { ...state, showSearchModal: !state.showSearchModal };
    }
    default: {
      return { ...state };
    }
  }
}

export default searchReducer;
