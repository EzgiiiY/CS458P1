// frontend/src/components/App.js
import React, { Component } from 'react';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'; // added
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import history from './history'; // added
import logo from './logo.png';
import SignIn from './SignIn';
import HeaderMain from './Header'
import SignUp1 from './SignUpPages/SignUp1';
import SignUp2 from './SignUpPages/SignUp2';
import SignUpFinal from './SignUpPages/SignUpFinal';

import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Router history={history}>
      <HeaderMain/>
      

          <Content >
            <Switch>
            
            <Route path='/signIn'>
                <SignIn/> 
            </Route>
            <Route path='/signup'>
                <SignUp1/>
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