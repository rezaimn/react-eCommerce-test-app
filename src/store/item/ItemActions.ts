import {AppActions} from "../models/actions";


import {Item} from "./models/Item";

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCHED_ITEMS = 'FETCHED_ITEMS';
export const FETCH_ITEMS_FAILED = 'FETCH_ITEMS_FAILED';


interface IFetchItemsAction {
    type: typeof FETCH_ITEMS;
}

interface IFetchedItemsAction {
    type: typeof FETCHED_ITEMS;
    payload: Item[];
}

interface IFetchItemsFailedAction {
    type: typeof FETCH_ITEMS_FAILED;
    payload: {
        status: string;
    };
}


export type ItemActionTypes =
    IFetchItemsAction |
    IFetchedItemsAction |
    IFetchItemsFailedAction;


