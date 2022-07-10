import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"; 
import rootReducer from "../reducer/main";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))