import React, {ComponentPropsWithoutRef, FC, useState} from 'react'
import {Card, Button} from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import {
    PlusCircleOutlined,
    MinusCircleOutlined
} from '@ant-design/icons';
import {Item} from '../../store/item/models/Item';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../store';
import {ShoppingQuote} from '../../store/shopping-quote/models/ShoppingQuote';

const {Meta} = Card;

type plusClickCallback = (item: Item, shoppingQuoteData: ShoppingQuote[], dispatch: any) => void;
type minusClickCallback = (item: Item, shoppingQuoteData: ShoppingQuote[], dispatch: any) => void;

interface CommonShopItemProps {
    item: Item;
    selectedItemsCount: number;
    onPlusClick: plusClickCallback;
    onMinusClick: minusClickCallback;
}

export type ShopItemProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof CommonShopItemProps> &
    CommonShopItemProps;

const ShopItem: FC<ShopItemProps> = ({
                                         item,
                                         selectedItemsCount,
                                         onPlusClick,
                                         onMinusClick
                                     }) => {
    const dispatch = useDispatch();
    const shoppingQuoteData = useSelector((state: IState) => state?.quote?.quote);
    return (
        <Card
            className='item-card'
            hoverable
            cover={<img alt="item-image" src={item.image}/>}
        >
            <Meta title={item.title} description={item.description}/>
            <p>{item.price}$</p>
            <ButtonGroup>
                <Button type="primary" onClick={() => onMinusClick(item,shoppingQuoteData,dispatch)} icon={<MinusCircleOutlined/>} size='small'/>
                <span style={{
                    padding: '0 5px',
                    borderTop: 'solid 1px #eee',
                    borderBottom: 'solid 1px #eee'
                }}>{selectedItemsCount}</span>
                <Button type="primary" onClick={() => onPlusClick(item,shoppingQuoteData,dispatch)} icon={<PlusCircleOutlined/>} size='small'/>
            </ButtonGroup>
        </Card>
    )
}

export default ShopItem;
