// frontend/src/components/App.js
import React, { Component } from 'react';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'; // added
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import history from './history'; // added

import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Router history={history}>
      <Header> HELLO </Header>

          <Content >
            <Switch>
            
            <Route path='/home'>
                {//<HomePage/>
  }
            </Route>
              {//<LandingPage />
  }
            </Switch>
          </Content>
          <Footer className='App-footer' style={{ textAlign: 'center'}}>
            
          </Footer>
          </Router>

    );
  }
};

export default App;