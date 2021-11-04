import {AppActions} from "../models/actions";


import {ShoppingQuote} from "./models/ShoppingQuote";

export const SAVE_SHOPPING_CART_DATA = 'SAVE_SHOPPING_CART_DATA';
export const SAVE_SHOPPING_CART_DATA_FAILED = 'SAVE_SHOPPING_CART_DATA_FAILED';
export const ADD_SHOPPING_CART_DATA = 'ADD_SHOPPING_CART_DATA';


interface ISaveShoppingCartDataAction {
    type: typeof SAVE_SHOPPING_CART_DATA;
    payload: {
        quote: ShoppingQuote[];
        url: string;
    }
}

interface ISaveShoppingCartDataFailedAction {
    type: typeof SAVE_SHOPPING_CART_DATA_FAILED;
    payload: {
        status: string;
    };
}

interface IAddShoppingCartDataAction {
    type: typeof ADD_SHOPPING_CART_DATA;
    payload:  ShoppingQuote[];
}

export const saveShoppingCartData = (quote:ShoppingQuote[], url:string): AppActions => {
    return {
        type: SAVE_SHOPPING_CART_DATA,
        payload:{
            quote,
            url
        }
    }
}


export const saveShoppingCartDataFailed = (status: string): AppActions => {
    return {
        type: SAVE_SHOPPING_CART_DATA_FAILED,
        payload: {status}
    }
}


export const addShoppingCartData = (quote:ShoppingQuote[]): AppActions => {
    return {
        type: ADD_SHOPPING_CART_DATA,
        payload: quote
    }
}

export type ShoppingQuoteActionTypes =
    ISaveShoppingCartDataAction |
    ISaveShoppingCartDataFailedAction|
    IAddShoppingCartDataAction;


