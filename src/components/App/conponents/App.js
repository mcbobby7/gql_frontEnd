import React, { Component } from 'react';
import styled from 'styled-components';
import MyHeader from './Header';
import { Link } from 'react-router-dom';
import Footer from './footer';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import GlobalStyles from '../../../globalStyles';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import AuthContext from '../../context/auth-contex';
import 'semantic-ui-css/semantic.min.css';

const { Header, Sider, Content } = Layout;

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/grapghql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    catch: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

const ResultWrapper = styled.div`
    margin: 0;
    text-align: center;
    width: 400px;
    height: 400px;
`;

class App extends Component {
    state = {
        collapsed: false,
        token: null,
        userId: null,
    };

    logout = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('tokenExpiration', '');
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { children } = this.props;
        return (
            <ApolloProvider client={client}>
                <AuthContext.Provider
                    value={{
                        login: this.login,
                        logout: this.logout,
                        token: this.state.token,
                        userId: this.state.userId,
                    }}
                >
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['45']}>
                                {localStorage.getItem('token') && (
                                    <Menu.Item key="23">
                                        <Icon type="user" />
                                        <span>
                                            <button onClick={this.logout}>Log Out</button>
                                        </span>
                                    </Menu.Item>
                                )}
                                {localStorage.getItem('token') && (
                                    <Menu.Item key="1">
                                        <Icon type="user" />
                                        <span>
                                            <Link style={{ color: 'white' }} to="/events">
                                                Events
                                            </Link>
                                        </span>
                                    </Menu.Item>
                                )}
                                {localStorage.getItem('token') && (
                                    <Menu.Item key="2">
                                        <Icon type="video-camera" />
                                        <span>
                                            <Link style={{ color: 'white' }} to="/bookings">
                                                Bookings
                                            </Link>
                                        </span>
                                    </Menu.Item>
                                )}
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
                            </Content>
                        </Layout>
                    </Layout>
                    <Footer />
                    <GlobalStyles />
                </AuthContext.Provider>
            </ApolloProvider>
        );
    }
}

export default App;
