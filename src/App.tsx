import React, {Component} from 'react'
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {AppState} from "./store/rootStore";
import {Layout, Menu} from 'antd';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';

const {Content, Footer} = Layout;

interface AppProps {
}


class App extends Component<AppProps, AppState> {


    render(): JSX.Element {
        return (
            <Layout>
                <BrowserRouter>
                 <Sidebar/>
                    <Layout>
                        <Navbar/>
                        <Content style={{margin: '24px 16px 0'}}>
                            <div className="site-layout-background">
                                <Switch>
                                    <Route path="/home">
                                        <HomePage/>
                                    </Route>
                                    <Route path="/shopping-cart">
                                        <ShoppingCart/>
                                    </Route>
                                    <Redirect from="/" to="/home"/>
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}></Footer>
                    </Layout>
                </BrowserRouter>
            </Layout>

        );
    }
}

export default App;
