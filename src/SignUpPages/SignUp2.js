import { Router, Route, Switch, Link, Redirect, withRouter } from 'react-router-dom'; // added
import React, { Component } from 'react';
import { Card } from 'antd';
import { Layout, Button, List, Table, Radio, Divider } from 'antd';

import { CheckOutlined } from '@ant-design/icons';

import Checkmark from '../Checkmark.png';
import Devices from '../Devices.png';

import 'antd/dist/antd.css';
import './SignUp1.css';
import Column from 'antd/lib/table/Column';

const { Header, Content, Footer } = Layout;



class SignUp2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planScreen: false,
            selectedPlan: ""
        };
        this.onSelectPlan = this.onSelectPlan.bind(this);
    }

    onSelectPlan(record, selected, selectedRows, nativeEvent){
        this.setState({selectedPlan:record});
    }
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    showMoreInfo = (e) => {
        this.setState({ buttonClicked: true });
    }

    
    render() {
        var content;
        const data = [
            {
              key: '1',
              name: 'Basic',
              price: 17.99,
              quality: 'good',
              resolution: '480p',
              multiScreen: '1',
              dSupport: '+',
              tvShowMov: '+',
              cancelOpt: "+"
            },
            {
              key: '2',
              name: 'Standard',
              price: 29.99,
              quality: 'better',
              resolution:'1080p',
              multiScreen: '2',
              dSupport: '+',
              tvShowMov: '+',
              cancelOpt: "+"
            },
            {
              key: '3',
              name: 'Premium',
              price: 41.99,
              quality: 'best',
              resolution:'4K + HDR',
              multiScreen: '4',
              dSupport: '+',
              tvShowMov: '+',
              cancelOpt: "+"
            },
        ];
        if (this.state.planScreen) {
            content = <div style={{ margin: "100px 0 20px" }}>
                <p style={{ textAlign: "left" }}>STEP 2 OF 3
                Choose the plan that’s right for you
Downgrade or upgrade at any time.</p>
                <br></br>
                <div>

                    <Divider />

                    <Table
                        rowSelection={{
                            type: "radio",
                            onSelect:this.onSelectPlan
                        }}  
                        dataSource={data}
                        pagination={false}
                    >
                        <Column title="Plan" dataIndex="name"/>
                        <Column title="Monthly price" dataIndex="price" />
                        <Column title="Video quality" dataIndex="quality" />
                        <Column title="Resolution" dataIndex="resolution" />
                        <Column title="Screens you can watch on at the same time" dataIndex="multiScreen" />
                        <Column title="Watch on your TV, computer, mobile phone and tablet" dataIndex="dSupport"/>
                        <Column title="Unlimited movies and TV shows" dataIndex="tvShowMov"/>
                        <Column title="Cancel anytime" dataIndex="cancelOpt"/>

                    </Table>
                </div>
                <p>Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content available in HD, Full HD, Ultra HD or HDR. See Terms of Use for more details.</p>
                <Link to={{
                        pathname: '/signUpFinal',
                        state: { detail: this.state.selectedPlan}
                        }}>
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
                        style={{ marginLeft: "30%" }}
                        itemLayout="horizontal"
                    >
                        <List.Item>
                            <List.Item.Meta
                                avatar={<CheckOutlined style={{ color: "#e50914" }} />}
                                title="No commitments, cancel anytime."
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                avatar={<CheckOutlined style={{ color: "#e50914" }} />}
                                title="Everything on Netflix for one low price."
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                avatar={<CheckOutlined style={{ color: "#e50914" }} />}
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