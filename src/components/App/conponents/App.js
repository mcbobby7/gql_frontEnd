import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from './footer';
import { ApolloProvider } from 'react-apollo';
import GlobalStyles from '../../../globalStyles';
import { Layout, Row, Col } from 'antd';
import 'semantic-ui-css/semantic.min.css';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Toolbar from './Toolbar/toolBar';
import SideDrawer from './Toolbar/sideDrawer';
import Backdrop from './Toolbar/backdrop';
import Plan from './plan';
import Footer2 from './footer2';

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
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

const { Header, Sider, Content } = Layout;

const ResultWrapper = styled.div`
    margin: 0;
    text-align: center;
    width: 400px;
    height: 400px;
`;

class App extends Component {
    state = {
        sideDrawerOpen: false,
        token: null,
        userId: null,
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        const { children } = this.props;
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return (
            <ApolloProvider client={client}>
                <div style={{ height: '100%' }}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <main style={{ marginTop: '56px' }}>
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
                        <Plan />
                        <Footer2 />
                        <Footer />
                    </main>
                </div>
                <GlobalStyles />
            </ApolloProvider>
        );
    }
}

export default App;
