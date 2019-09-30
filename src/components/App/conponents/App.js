import React, { Component } from 'react';
import styled from 'styled-components';
import MyHeader from './Header';
import Slider from './slider';
import Footer from './footer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import GlobalStyles from '../../../globalStyles';
import { Layout, Menu, Icon, Row, Col } from 'antd';

const { Header, Sider, Content } = Layout;

const apolloClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
});

const AppLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const ResultWrapper = styled.div`
    margin: 0;
    text-align: center;
    width: 400px;
    height: 400px;
    /* border: 10px solid #022140; */
    /* overflow-x: hidden;
    overflow-x: auto; */
`;

class App extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { children } = this.props;
        return (
            <ApolloProvider client={apolloClient}>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo">
                            <h1>logo</h1>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <MyHeader />
                        </Header>
                        <Content
                            style={{
                                background: '#fff',
                                margin: '101px 0px',
                                minHeight: 280,
                                padding: 0,
                            }}
                        >
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                                    <Content>{children}</Content>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                    <ResultWrapper>
                                        <h1>List of users goes here</h1>
                                    </ResultWrapper>
                                </Col>
                            </Row>
                            <Footer />
                        </Content>
                    </Layout>
                </Layout>
                <Footer />
                <GlobalStyles />
            </ApolloProvider>
        );
    }
}

export default App;
