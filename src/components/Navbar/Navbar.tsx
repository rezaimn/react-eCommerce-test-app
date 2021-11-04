import React, {ComponentPropsWithoutRef, FC, useEffect, useState} from 'react'
import {ShoppingCartOutlined} from '@ant-design/icons';
import {Header} from 'antd/es/layout/layout';
import {useSelector} from 'react-redux';
import {ShoppingQuote} from '../../store/shopping-quote/models/ShoppingQuote';
import {IState} from '../../store';
import './Navbar.css';
import { useHistory } from "react-router-dom"

interface CommonNavbarProps {
}

export type NavbarProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof CommonNavbarProps> &
    CommonNavbarProps;

const Navbar: FC<NavbarProps> = () => {
    const history=useHistory();
    const cartItems: ShoppingQuote[] = useSelector((state: IState) => state.quote.quote);
    const [cartItemsCount, setCartItemsCount] = useState<number>(0);
    useEffect(() => {
        let count = 0;
        for (let cartItem of cartItems || []) {
            count += cartItem.count;
        }
        setCartItemsCount(count);
    }, [cartItems]);
    return (
        <Header className="site-layout-sub-header-background" style={{padding: 0}}>
            <span onClick={() => history.push('/shopping-cart')} style={{cursor:'pointer'}}>
                <ShoppingCartOutlined className='shopping-basket'/>
                {
                    cartItemsCount > 0 &&
                    <span className='cart-item-count'>{cartItemsCount}</span>
                }
            </span>
        </Header>
    )
}

export default Navbar;
