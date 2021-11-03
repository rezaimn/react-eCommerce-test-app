import {createStore, combineReducers, applyMiddleware} from 'redux';
import {itemReducer} from './item/ItemReducer';
import {createLogger} from "redux-logger";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {AppActions} from "./models/actions";

const logger = createLogger();
export const rootReducer = combineReducers({itemReducer});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger));
