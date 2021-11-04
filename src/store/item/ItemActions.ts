import {AppActions} from "../models/actions";


import {Item} from "./models/Item";

export const ADD_ITEM = 'ADD_ITEM';
export const ADDED_ITEM = 'ADDED_ITEM';
export const ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCHED_ITEMS = 'FETCHED_ITEMS';
export const FETCH_ITEMS_FAILED = 'FETCH_ITEMS_FAILED';

interface IAddItemAction {
    type: typeof ADD_ITEM;
    payload:{
        item:Item;
        url: string;
    }
}

interface IAddedItemAction {
    type: typeof ADDED_ITEM;
    payload: Item;
}

interface IAddItemFailedAction {
    type: typeof ADD_ITEM_FAILED;
    payload: {
        status: string;
    };
}

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

export const addItem = (item:Item,url:string): AppActions => {
    return {
        type: ADD_ITEM,
        payload:{
            item,
            url
        }
    }
}

export const addedItem = (item: Item): AppActions => {
    return {
        type: ADDED_ITEM,
        payload:item
    }
}

export const addItemFailed = (status: string): AppActions => {
    return {
        type: FETCH_ITEMS_FAILED,
        payload: {status}
    }
}


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
export type ItemActionTypes =
    IAddItemAction|
    IAddedItemAction|
    IAddItemFailedAction|
    IFetchItemsAction |
    IFetchedItemsAction |
    IFetchItemsFailedAction
    ;


