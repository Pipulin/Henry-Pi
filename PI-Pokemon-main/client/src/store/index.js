import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../reducer";



const composeEnhacer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

