import React, {FC, useEffect, useState} from 'react'
import {Button} from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import {
    PlusCircleOutlined,
    MinusCircleOutlined
} from '@ant-design/icons';
import {Table} from 'antd';
import {addItemToShoppingQuote, removeItemFromShoppingQuote} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../store';
import {Image} from 'antd';
import Text from 'antd/es/typography/Text';
import {saveQuoteEpic} from '../../store/shopping-quote/ShoppingQuoteEpic';
import {useHistory} from "react-router-dom";

interface CommonShoppingCartProps {

}

const ShoppingCart: FC<CommonShoppingCartProps> = () => {
    const shoppingQuoteData: any = useSelector((state: IState) => state?.quote?.quote);
    const dispatch = useDispatch();
    const history = useHistory();
    const [data, setData] = useState([]);

    const columns = [
        {title: '#', dataIndex: 'num', key: 'num'},
        {
            title: 'Image', dataIndex: 'image', key: 'image',
            render: (image: any) => {
                return <Image width={50} src={image}/>
            }
        },
        {title: 'Title', dataIndex: 'title', key: 'title'},
        {title: 'Description', dataIndex: 'description', key: 'description'},
        {title: 'Count', dataIndex: 'count', key: 'count'},
        {title: 'Price', dataIndex: 'price', key: 'price'},
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item: any) => {
                return <ButtonGroup>
                    <Button type="primary"
                            onClick={() => removeItemFromShoppingQuote(item, shoppingQuoteData, dispatch)}
                            icon={<MinusCircleOutlined/>} size='small'/>
                    <Button type="primary"
                            onClick={() => addItemToShoppingQuote(item, shoppingQuoteData, dispatch)}
                            icon={<PlusCircleOutlined/>} size='small'/>
                </ButtonGroup>
            },
        },
    ];

    useEffect(() => {
        const refactoredData: any = shoppingQuoteData?.map((item: any, index: number) => {
            return {
                id: item.item?.id,
                num: index + 1,
                image: item.item?.image,
                title: item.item?.title,
                description: item.item?.description,
                count: item.count,
                price: item.item?.price
            }
        })
        setData(refactoredData);
    }, [shoppingQuoteData]);
    const shopNow = () => {
        dispatch(saveQuoteEpic(shoppingQuoteData, 'quote.json'));
        history.push('/home');
    }
    return (
        <>
            <h1>Shopping Cart Items</h1>
            <Table
                pagination={false}
                columns={columns}
                dataSource={data}
                summary={pageData => {
                    let totalCount = 0;
                    let totalPrice = 0;

                    pageData.forEach((item: any, index: number) => {
                        totalCount += item.count;
                        totalPrice += item.count * item.price;
                    });

                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={2}>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={3}>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={4}>
                                    <Text>{totalCount}</Text>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={5}>
                                    <Text>{totalPrice}$</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}
            />

            <Button style={{margin: '20px', float: 'right'}} type="primary" onClick={() => shopNow()}>Shop Now</Button>
        </>
    )
}

export default ShoppingCart;
