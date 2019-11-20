import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css';
import PageList from './components/containers/List';
import Detail from './components/containers/Detail';
import Vip from './components/containers/Vip';
import Login from './components/login/index';

import AppHeader from './components/header/index';

const { Header, Footer, Content } = Layout;

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Layout style={{minWidth:1300}}>
                <Header className='header'>
                    <AppHeader />
                </Header>
                <Content className='content'>
                    <Login />
                    <Switch>
                        <Route path='/vip' component={Vip}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                        <Route path='/:id?' component={PageList}></Route>
                    </Switch>
                </Content>
                <Footer className='footer'>Footer</Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
