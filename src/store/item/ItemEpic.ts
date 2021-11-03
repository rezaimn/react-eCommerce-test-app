import {FETCH_ITEMS, FETCH_ITEMS_FAILED, FETCHED_ITEMS} from './ItemActions';
import {AppActions} from "../models/actions";
import {Dispatch} from "redux";
import {get} from "../../api";
import {Item} from './models/Item';


export const fetchItems = (): AppActions => {
    return {
        type: FETCH_ITEMS,
    }
}

export const fetchedItems = (items: Item[]): AppActions => {
    return {
        type: FETCHED_ITEMS,
        payload: [...items]
    }
}

export const fetchItemsFailed = (status: string): AppActions => {
    return {
        type: FETCH_ITEMS_FAILED,
        payload: {status}
    }
}


export const fetchItemsEpic = (url:string) => {
    return async (dispatch: Dispatch) => {

        try {
            const response = await get('');

            // set account info
            if (response) {
                dispatch(fetchedItems(response))
            }

        } catch (err) {

            // show error
            dispatch(fetchItemsFailed('failed'))

        } finally {
        }
    };
};


export default fetchItemsEpic;

