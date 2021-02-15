import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Card } from 'antd';
import './SignIn.css'
import { Form, Input, Button, Checkbox } from 'antd';

import 'antd/dist/antd.css';




class SignIn extends Component {
    

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

render() {
    return (
        <Card bordered={false} className='center'> 
            <div className="hybrid-login-form">
                <h1>Sign In</h1>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" style={{backgroundColor:"#e50914",color:"#fff"}}>
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    );
}
    };
export default SignIn;