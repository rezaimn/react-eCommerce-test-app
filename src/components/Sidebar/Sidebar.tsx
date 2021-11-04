import React, {ComponentPropsWithoutRef, FC} from 'react'

import {useHistory} from "react-router-dom"
import {Layout, Menu} from 'antd';
import {UserOutlined} from '@ant-design/icons';
const {Sider} = Layout;
interface CommonSidebarProps {
}

export type SidebarProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof CommonSidebarProps> &
    CommonSidebarProps;

const Sidebar: FC<SidebarProps> = () => {
    const history=useHistory();

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div className="logo" style={{marginBottom:'40px'}}/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
                <Menu.Item key="1" icon={<UserOutlined/>}  onClick={()=>history.push('/home')}>
                    Products
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;
