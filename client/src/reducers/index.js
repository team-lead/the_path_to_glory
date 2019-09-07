import { combineReducers } from "redux";
import searchReducer from "./mainPageReducers/searchReducer";
import dropDownMenuReducer from "./mainPageReducers/dropDownMenuReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  dropdownMenu: dropDownMenuReducer
});

export default rootReducer;
