import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'; // added
import React, { Component } from 'react';
import { Card } from 'antd';
import './SignIn.css';
import {
    FacebookFilled
  } from '@ant-design/icons';

import { Form, Input, Button, Checkbox } from 'antd';

import 'antd/dist/antd.css';




class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            buttonClicked:false,
        };
        
    }

    
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    showMoreInfo=(e)=> {
        this.setState({buttonClicked:true});
    }

    render() {
        return (
            <Card bordered={false} style={{ "backgroundColor": "#00000000" }} >
                <div className="hybrid-login-form" >
                    <h1>Sign In</h1>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please enter a valid email or phone number.' }]}
                        >
                            <Input style={{ "backgroundColor": "#333",borderRadius:"4px" ,borderColor:"#333"}} placeholder="Email or Phone Number" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Your password must contain between 4 and 60 characters.' }]}
                        >
                            <Input.Password iconRender={(visible) => (visible ? <h3>HIDE</h3> : <h3>SHOW</h3>)} style={{ "backgroundColor": "#333", borderColor:"#333",borderRadius:"4px"}} placeholder="Password" />
                        </Form.Item>



                        <Form.Item>
                            <Button block type="primary" htmlType="submit" style={{ backgroundColor: "#e50914", color: "#fff", borderColor: "#e50914" }}>
                                Sign In
                        </Button>
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox style={{ color: "#b3b3b3" }}>Remember me</Checkbox>
                        </Form.Item>
                        <a href="https://www.netflix.com/tr-en/LoginHelp" style={{ color: "#b3b3b3" }}>Need Help</a>
                    </Form>
                    <FacebookFilled />
                    <p style={{ fontWeight: "500", fontSize: "16px", marginTop: "2%", color: "#b3b3b3" }}>New to Netflix? <Link to="/signUp1" style={{ color: "#fff" }}>Sign Up Now</Link></p>
                    <p style={{ fontWeight: "500", marginTop: "2%", color: "#b3b3b3" }}>This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <Button type="link" style={{padding:"0"}} onClick={e=>this.showMoreInfo(e)}>Learn more.</Button>
                    </p>
                    <br></br>
                    {this.state.buttonClicked? <p style={{fontSize:"13px",color:"#8c8c8c"}}>The information collected by Google reCAPTCHA is subject to the Google <Button href="https://policies.google.com/privacy" style={{padding:"0"}} type="link">Privacy Policy </Button>and <Button href="https://policies.google.com/terms" type="link" style={{padding:"0"}}>Terms of Service</Button>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>:<></>}
                </div>

            </Card>
        );
    }
};
export default SignIn;