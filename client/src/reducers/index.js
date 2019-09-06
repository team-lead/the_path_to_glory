import {combineReducers} from "redux";
import searchReducer from "./mainPageReducers/searchReducer";
import addToCart from "./cartReducers/addToCart";

const rootReducer = combineReducers(
    {
        search: searchReducer,
        add: addToCart
    });

export default rootReducer;
