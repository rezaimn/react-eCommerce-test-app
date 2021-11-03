import React, {ComponentPropsWithoutRef, FC} from 'react'
import {Card, Button} from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import {
    PlusCircleOutlined,
    MinusCircleOutlined
} from '@ant-design/icons';

const {Meta} = Card;

type plusClickCallback = () => void;
type minusClickCallback = () => void;

interface CommonShopItemProps {
    id: string;
    image: string,
    title: string;
    description: string;
    price: number;
    onPlusClick: plusClickCallback;
    onMinusClick: minusClickCallback;
}

export type ShopItemProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof CommonShopItemProps> &
    CommonShopItemProps;

const ShopItem: FC<ShopItemProps> = ({
                                         id,
                                         title,
                                         description,
                                         image,
                                         price,
                                         onPlusClick,
                                         onMinusClick
}) => {
    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={<img alt="item-image" src={image}/>}
        >
            <Meta title={title} description={description}/>
            <p>{price}</p>
            <ButtonGroup>
                <Button type="primary" onClick={onPlusClick} icon={<PlusCircleOutlined/>} size='small'/>
                <Button type="primary" onClick={onMinusClick} icon={<MinusCircleOutlined/>} size='small'/>
            </ButtonGroup>
        </Card>
    )
}

export default ShopItem;
