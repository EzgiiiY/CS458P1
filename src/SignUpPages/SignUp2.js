import { Router, Route, Switch, Link, Redirect, withRouter } from 'react-router-dom'; // added
import React, { Component } from 'react';
import { Card } from 'antd';
import { Layout, Menu, Breadcrumb, Button, Input, Form, Checkbox, List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import Checkmark from '../Checkmark.png';
import Devices from '../Devices.png';

import 'antd/dist/antd.css';
import './SignUp1.css';
const { Header, Content, Footer } = Layout;



class SignUp2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planScreen: false,
        };

    }


    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    showMoreInfo = (e) => {
        this.setState({ buttonClicked: true });
    }

    render() {
        var content;
        if (this.state.planScreen) {
            content = <div style={{ margin: "100px 0 20px" }}>
                <p style={{ textAlign: "left" }}>STEP 2 OF 3
Choose the plan that’s right for you
Downgrade or upgrade at any time.</p>
                <br></br>
                
                <Link to="/signUpFinal">
                    <Button block type="primary" htmlType="submit" style={{ backgroundColor: "#e50914", color: "#fff", borderColor: "#e50914" }}>
                        Continue
                    </Button>
                </Link>
            </div>
        }
        else {
            content =
                <><img style={{ backgroundColor: "white", height: "90px", margin: "100px 0 20px", marginLeft: "44%", justifyContent: "center" }} src={Checkmark}></img>
                    <p style={{ textAlign: "center" }}>STEP 2 OF 3</p>
                    <br></br>
                    <p style={{ textAlign: "center" }}>
                        Choose your plan.</p>
                    <List
                        style={{marginLeft:"30%"}}
                        itemLayout="horizontal"                        
                    >
                        <List.Item>
                                <List.Item.Meta
                                    avatar={<CheckOutlined style={{color:"#e50914"}}/>}
                                    title="No commitments, cancel anytime."
                                />
                        </List.Item>
                        <List.Item>
                                <List.Item.Meta
                                    avatar={<CheckOutlined style={{color:"#e50914"}}/>}
                                    title="Everything on Netflix for one low price."
                                />
                        </List.Item>
                        <List.Item>
                                <List.Item.Meta
                                    avatar={<CheckOutlined style={{color:"#e50914"}}/>}
                                    title="Unlimited viewing on all your devices."
                                />
                        </List.Item>
                    </List>
                    <Button size="large" style={{
                        minHeight: "48px",
                        fontWeight: "400",
                        fontSize: "17px",
                        borderRadius: "2px",
                        backgroundColor: "#e50914",
                        color: "#fff",
                        marginLeft: "44%"
                    }} onClick={() => this.setState({ planScreen: true })}>
                        See the Plans
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
export default withRouter(SignUp2);