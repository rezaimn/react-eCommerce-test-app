import React,{Component} from 'react'
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {AppState} from "./store/rootStore";
import {Layout, Menu} from 'antd';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const history = createBrowserHistory();

interface AppProps {}


class App extends Component<AppProps, AppState> {
    render(): JSX.Element {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            nav 4
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background">
                            <Router history={history}>
                                <Switch>
                                    <Route path="/home">
                                        <HomePage/>
                                    </Route>
                                    <Route path="/login">
                                        {/*<Login />*/}
                                    </Route>
                                    {/*<Redirect from="/" to="/login" />*/}
                                </Switch>
                            </Router>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}></Footer>
                </Layout>
            </Layout>

        );
    }
}

export default App;
