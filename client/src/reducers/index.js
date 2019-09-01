import { combineReducers } from "redux";
import searchReducer from "./mainPageReducers/searchReducer";

const rootReducer = combineReducers({search: searchReducer});

export default rootReducer;
