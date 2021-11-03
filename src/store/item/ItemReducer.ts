import {FETCH_ITEMS, ItemActionTypes} from './ItemActions';

import {Item} from './models/Item';
import {Action, Reducer} from "redux";

interface IState {
    items: Item[]
}

export const initializeItemState: IState = {
    items: []
}

// @ts-ignore
export const itemReducer: Reducer<Item, Action> = (state = initializeItemState, action: ItemActionTypes) => {

    switch (action.type) {
        case FETCH_ITEMS: {
            return {...state};
        }
        default:
            return state;
    }
}
