// frontend/src/components/App.js
import React, { Component } from 'react';
import { Router, Route, Switch, Link, Redirect,withRouter } from 'react-router-dom'; // added
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import history from './history'; // added
import logo from '../src/logo.png';
import SignIn from './SignIn';


import './App.css';
const { Header, Content, Footer } = Layout;

class HeaderMain extends Component {

  render() {
    const {pathname} = this.props.location;
    console.log(pathname);
    if(pathname==="/signup"||pathname==="/signup2"||pathname==="/signUpFinal")
      var header = <Header style={{background:"white"}}><a href="https://www.netflix.com/tr-en/"><img className='logo' alt="logo" src={logo} /></a>
                    <Link to="/signIn"><Button type="link" style={{color:"black",fontSize:"16px", lineHeight:"55px",float:"right", alignSelf:"center"}}>Sign In</Button></Link>
                  </Header>

    else
      var header = <Header><a href="https://www.netflix.com/tr-en/"><img className='logo' alt="logo" src={logo} /></a></Header>

      
    return header; 
  }
};

export default withRouter (HeaderMain);