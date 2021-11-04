import {IItemsState, initializeItemState, itemReducer} from './item/ItemReducer';
import {combineReducers} from 'redux';
import {IQuoteState} from './shopping-quote/ShoppingQuoteReducer';

export interface IState {
    item: IItemsState,
    quote: IQuoteState
}
