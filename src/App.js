// frontend/src/components/App.js
import React, { Component } from 'react';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'; // added
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import history from './history'; // added
import logo from './logo.png';
import SignIn from './SignIn';
import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Router history={history}>
      <Header> <a path='/home'><img className='logo' alt="logo" src={logo} /></a>
       </Header>

          <Content >
            <Switch>
            
            <Route path='/signIn'>
                <SignIn/> 
            </Route>
              <SignIn />
            
            </Switch>
          </Content>
          <Footer className='App-footer' style={{ textAlign: 'center'}}>
            
          </Footer>
          </Router>

    );
  }
};

export default App;