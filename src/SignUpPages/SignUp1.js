import { Router, Route, Switch, Link, Redirect, withRouter } from 'react-router-dom'; // added
import React, { Component } from 'react';
import { Card } from 'antd';
import { Layout, Menu, Breadcrumb, Button, Input,Form,Checkbox } from 'antd';
import logo from '../logo.png';
import Devices from '../Devices.png';


import 'antd/dist/antd.css';
import './SignUp1.css';
const { Header, Content, Footer } = Layout;



class SignUp1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            passwordScreen:false,
        };
        
    }

    
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    showMoreInfo=(e)=> {
        this.setState({buttonClicked:true});
    }

    render() {
        var content;
        if(this.state.passwordScreen){
            content=<>
              <p style={{textAlign:"left"}}>STEP 1 OF 3
Create a password to start your membership.
Just a few more steps and you're done!
We hate paperwork, too.</p>
                <br></br>  
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
                            <Input style={{ backgroundColor: "#fff",borderRadius:"4px" ,borderColor:"#333", color:"#8c8c8c"}} placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Your password must contain between 4 and 60 characters.' }]}
                        >
                            <Input.Password className="signUp" visibilityToggle={false} style={{ "backgroundColor": "#fff", borderColor:"#333",borderRadius:"4px"}} placeholder="Password" />
                        </Form.Item>

                        <Form.Item name="send" valuePropName="checked">
                            <Checkbox >Please do not email me Netflix special offers.</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit" style={{ backgroundColor: "#e50914", color: "#fff", borderColor: "#e50914" }}>
                                Continue
                            </Button>
                        </Form.Item>
                        
                    </Form>
            </>
        }
        else{
            content=
                <><img style={{backgroundColor:"white", height:"90px",margin:"100px 0 20px", marginLeft:"24%", justifyContent:"center"}} src={Devices}></img>
                <p style={{textAlign:"center"}}>STEP 1 OF 3
Finish setting up your account.
Netflix is personalized for you. Create a password to watch Netflix on any device at any time.</p>
                <br></br>
                <Button size="large" style={{minHeight: "48px",
                                fontWeight: "400",
                                fontSize: "17px",
                                borderRadius:"2px",
                                backgroundColor:"#e50914",
                                color:"#fff",
                                marginLeft:"45%"}} onClick={()=>this.setState({passwordScreen:true})}>
                    Continue
                </Button>
                </>
        }
        return (
            <div className="ant-layout-content signUp">
            <Card className="signUp" bordered={false}>
            
                {content}
                
            </Card>
            </div>

        );
    }
};
export default withRouter (SignUp1);