import {Item} from '../../item/models/Item';

export interface ShoppingQuote {
    item: Item|null,
    count: number
}
