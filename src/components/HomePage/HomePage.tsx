import React, {FC, useEffect, useState} from 'react'
import {Item} from '../../store/item/models/Item';
import {useDispatch, useSelector} from 'react-redux';
import {addItemEpic, fetchItemsEpic} from '../../store/item/ItemEpic';
import {IItemsState} from '../../store/item/ItemReducer';
import ShopItem from '../ShopItem/ShopItem';
import {IState} from '../../store';
import {Row, Col} from 'antd';
import './HomePage.css';
import {ShoppingQuote} from '../../store/shopping-quote/models/ShoppingQuote';
import {addQuoteEpic} from '../../store/shopping-quote/ShoppingQuoteEpic';
import {addItemToShoppingQuote, getSelectedItemCount, removeItemFromShoppingQuote} from '../utils';

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = () => {

    const items: Item[] = useSelector((state: IState) => state?.item?.items);
    const dispatch = useDispatch();
    const shoppingQuoteData = useSelector((state: IState) => state?.quote?.quote);
    useEffect(() => {
        dispatch(fetchItemsEpic('items.json'));
    }, []);


    return (
        <>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                {
                    items && items?.map((item, index) => {
                        return <Col className="gutter-row" span={8} key={'item-' + index}>
                            <ShopItem
                                selectedItemsCount={getSelectedItemCount(item.id,shoppingQuoteData)}
                                item={item}
                                onPlusClick={addItemToShoppingQuote}
                                onMinusClick={removeItemFromShoppingQuote}
                            />
                        </Col>
                    })
                }
            </Row>
        </>
    )
}

export default HomePage;
