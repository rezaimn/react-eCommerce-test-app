import {Dispatch} from "redux";
import {get, post} from "../../api";
import {addedItem, addItemFailed, fetchedItems, fetchItemsFailed} from './ItemActions';
import {Item} from './models/Item';

export const fetchItemsEpic = (url: string) => {
    return async (dispatch: Dispatch) => {

        try {
            const response = await get(url);
            const items: Item[] = Object.keys(response)?.map((key) => {
                return response[key];
            });
            // set items
            if (response) {
                dispatch(fetchedItems(items))
            }

        } catch (err) {
            // show error
            dispatch(fetchItemsFailed('failed'))

        } finally {
        }
    };
};

export const addItemEpic = (item: Item, url: string) => {
    return async (dispatch: Dispatch) => {

        try {
            const response = await post(url, item);

            // set items
            if (response) {
                dispatch(addedItem(item));
            }

        } catch (err) {

            // show error
            dispatch(addItemFailed('failed'))

        } finally {
        }
    };
};


