import {createStore, combineReducers, applyMiddleware} from 'redux';
import {itemReducer} from './item/ItemReducer';

import {createLogger} from "redux-logger";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {AppActions} from "./models/actions";
import {shoppingQuoteReducer} from './shopping-quote/ShoppingQuoteReducer';

const logger = createLogger();
export const rootReducer = combineReducers({item: itemReducer, quote:shoppingQuoteReducer});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger));
