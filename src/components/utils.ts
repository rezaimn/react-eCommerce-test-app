import {Item} from '../store/item/models/Item';
import {ShoppingQuote} from '../store/shopping-quote/models/ShoppingQuote';
import {addQuoteEpic} from '../store/shopping-quote/ShoppingQuoteEpic';


export const getSelectedItemCount = (itemId: number, shoppingQuoteData: ShoppingQuote[]) => {
    const selectedItemIndex = shoppingQuoteData.findIndex(quote => quote?.item?.id === itemId);
    if (selectedItemIndex >= 0) {
        return shoppingQuoteData ? shoppingQuoteData[selectedItemIndex].count : 0;
    } else {
        return 0;
    }
}
export const addItemToShoppingQuote = (item: Item|null, shoppingQuoteData: ShoppingQuote[], dispatch: any) => {
    const selectedItemIndex = shoppingQuoteData.findIndex(quote => quote?.item?.id === item?.id);
    const quote = [...shoppingQuoteData];
    if (selectedItemIndex >= 0) {
        quote[selectedItemIndex].count++;
    } else {
        const newItem: ShoppingQuote = {
            item: item,
            count: 1
        }
        quote.push(newItem);
    }
    dispatch(addQuoteEpic(quote));
}
export const removeItemFromShoppingQuote = (item: Item|null, shoppingQuoteData: ShoppingQuote[], dispatch: any) => {
    const selectedItemIndex = shoppingQuoteData.findIndex(quote => quote?.item?.id === item?.id);
    const quote = [...shoppingQuoteData];
    console.log(item,selectedItemIndex,'ssssssssssssssssssssssssssssssssssssss')

    if (selectedItemIndex >= 0) {
        if (!(shoppingQuoteData) || shoppingQuoteData[selectedItemIndex].count > 0) {
            quote[selectedItemIndex].count--;
        } else {
            quote.splice(selectedItemIndex, 1);
        }
    }
    dispatch(addQuoteEpic(quote));
}
