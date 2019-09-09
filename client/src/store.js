import { createStore, applyMiddleware } from "redux";
<<<<<<< HEAD
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
=======
import logger from 'redux-logger'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24

export default store;
