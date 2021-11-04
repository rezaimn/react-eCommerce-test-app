import {Dispatch} from "redux";
import {get, post} from "../../api";
import {ShoppingQuote} from './models/ShoppingQuote';
import {addShoppingCartData, saveShoppingCartData, saveShoppingCartDataFailed} from './ShoppingQuoteActions';

export const saveQuoteEpic = (quote: ShoppingQuote[], url: string) => {
    return async (dispatch: Dispatch) => {

        try {
            const response = await post(url, quote);
            dispatch(addShoppingCartData([]));

        } catch (err) {

            // show error
            dispatch(saveShoppingCartDataFailed('failed'))

        } finally {
        }
    };
};

export const addQuoteEpic = (quote: ShoppingQuote[]) => {
    return async (dispatch: Dispatch) => {
        dispatch(addShoppingCartData(quote));
    };
};
