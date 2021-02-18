import { Router, Route, Switch, Link, Redirect } from 'react-router-dom'; // added
import React, { Component } from 'react';
import { Card } from 'antd';
import './SignIn.css';
import { FacebookFilled} from '@ant-design/icons';
import facebook from './facebook.png';

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
            <Card bordered={false} style={{ "backgroundColor": "#00000000",paddingBottom:"5%" }} >
                <div className="hybrid-login-form" >
                    <h1 id="signInHeader">Sign In</h1>
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
                            <Input style={{ "backgroundColor": "#333",borderRadius:"4px" ,borderColor:"#333", color:"#8c8c8c"}} placeholder="Email or Phone Number" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Your password must contain between 4 and 60 characters.' }]}
                        >
                            <Input.Password iconRender={(visible) => (visible ? <h3>HIDE</h3> : <h3>SHOW</h3>)} style={{ "backgroundColor": "#333", borderColor:"#333",borderRadius:"4px"}} placeholder="Password" />
                        </Form.Item>



                        <Form.Item>
                            <Link to="/signedIn">
                            <Button block type="primary" htmlType="submit" id="signIn" style={{ backgroundColor: "#e50914", color: "#fff", borderColor: "#e50914" }}>
                                Sign In
                        </Button>
                        </Link>
                        </Form.Item>
                        <Form.Item id="rememberMe" name="remember" valuePropName="checked">
                            <Checkbox style={{ color: "#b3b3b3" }}>Remember me</Checkbox>
                        </Form.Item>
                        <a id="needHelp" href="https://www.netflix.com/tr-en/LoginHelp" style={{ color: "#b3b3b3" }}>Need Help?</a>
                    </Form>
                    <a id="facebookConnect" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=163114453728333&kid_directed_site=0&app_id=163114453728333&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fapp_id%3D163114453728333%26cbt%3D1613471068099%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df1b41f2e1d06f1%2526domain%253Dwww.netflix.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Fff10f31a6dcc08%2526relation%253Dopener%26client_id%3D163114453728333%26display%3Dpopup%26domain%3Dwww.netflix.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.netflix.com%252Ftr-en%252Flogin%26locale%3Den_US%26logger_id%3Df5c7639525a344%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df370977e7a58614%2526domain%253Dwww.netflix.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Fff10f31a6dcc08%2526relation%253Dopener%2526frame%253Dfe496088c0265c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26sdk%3Djoey%26version%3Dv2.9%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df370977e7a58614%26domain%3Dwww.netflix.com%26origin%3Dhttps%253A%252F%252Fwww.netflix.com%252Fff10f31a6dcc08%26relation%3Dopener%26frame%3Dfe496088c0265c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"><img style={{ height: "20px",width:"20px"}} className='facebook' alt="facebook" src={facebook} /></a>
                    <p style={{ fontWeight: "500", fontSize: "16px", marginTop: "2%", color: "#b3b3b3" }}>New to Netflix? <Link id="signUp" to="/signup" style={{ color: "#fff" }}>Sign Up Now</Link></p>
                    <p style={{ fontWeight: "500", marginTop: "2%", color: "#b3b3b3" }}>This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <Button id="learnMore" type="link" style={{padding:"0"}} onClick={e=>this.showMoreInfo(e)}>Learn more.</Button>
                    </p>
                    <br></br>
                    <p hidden={!this.state.buttonClicked} id="extraInfo" style={{fontSize:"13px",color:"#8c8c8c"}}>The information collected by Google reCAPTCHA is subject to the Google <Button href="https://policies.google.com/privacy" style={{padding:"0"}} type="link">Privacy Policy </Button>and <Button href="https://policies.google.com/terms" type="link" style={{padding:"0"}}>Terms of Service</Button>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
                </div> 

            </Card>
        );
    }
};
export default SignIn;