import {FETCHED_ITEMS, ItemActionTypes} from './ItemActions';

import {Item} from './models/Item';
import {Action, Reducer} from "redux";

export interface IItemsState {
    items: Item[]
}

export const initializeItemState: IItemsState = {
    items: []
}

// @ts-ignore
export const itemReducer: Reducer<Item, Action> = (state = initializeItemState, action: ItemActionTypes) => {

    switch (action.type) {
        case FETCHED_ITEMS: {
            return {
                ...state,
                items: action.payload
            };
        }
        default:
            return state;
    }
}
