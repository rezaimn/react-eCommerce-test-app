import {ADD_SHOPPING_CART_DATA, ShoppingQuoteActionTypes} from './ShoppingQuoteActions';

import {ShoppingQuote} from './models/ShoppingQuote';
import {Action, Reducer} from "redux";

export interface IQuoteState {
    quote: ShoppingQuote[]
}

export const initializeQuoteState: IQuoteState = {
    quote: []
}
// @ts-ignore
export const shoppingQuoteReducer: Reducer<ShoppingQuote, Action> = (state = initializeQuoteState, action: ShoppingQuoteActionTypes) => {

    switch (action.type) {
        case ADD_SHOPPING_CART_DATA: {
            return {
                ...state,
                quote: action.payload
            };
        }
        default:
            return state;
    }
}
