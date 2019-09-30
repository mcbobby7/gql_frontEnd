import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Reveal from 'react-reveal/Reveal';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getCountries = gql`
    {
        countries {
            name
            code
            continent {
                name
            }
            languages {
                name
                native
            }
        }
    }
`;

const HeaderWrapper = styled.div`
    .img {
        width: 100%;
        height: 400px;
    }
    .image {
        width: 250px;
        height: 200px;
        padding-top: 20px;
        align-self: center;
    }
    p {
        width: 100%;
    }
    .pad {
        padding: 20px;
    }
`;

class Countries extends Component {
    render() {
        console.log(this.props);
        return (
            <HeaderWrapper>
                <img className="img" src="/home2.jpg" alt="logo" />
                <Row>
                    <Col xs={2} sm={24} md={24} lg={16} xl={16}>
                        <Reveal>
                            <div className="pad">
                                <h2>
                                    GET STARTED WITH <span className="yellow">MY WEBSITE</span>
                                </h2>
                                <h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                </h4>
                            </div>
                        </Reveal>
                    </Col>
                    <Col xs={20} sm={24} md={24} lg={8} xl={8}>
                        <img className="image" src="/home3.jpg" alt="logo" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} sm={24} md={24} lg={16} xl={16}>
                        <Reveal>
                            <div className="pad">
                                <h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                </h4>
                            </div>
                        </Reveal>
                    </Col>
                    <Col xs={20} sm={24} md={24} lg={8} xl={8}>
                        <img className="image" src="/nd.jpg" alt="logo" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} sm={24} md={24} lg={16} xl={16}>
                        <Reveal>
                            <div className="pad">
                                <h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                </h4>
                            </div>
                        </Reveal>
                    </Col>
                    <Col xs={20} sm={24} md={24} lg={8} xl={8}>
                        <img className="image" src="/home5.jpg" alt="logo" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} sm={24} md={24} lg={16} xl={16}>
                        <Reveal>
                            <div className="pad">
                                <h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                    </p>
                                </h4>
                            </div>
                        </Reveal>
                    </Col>
                    <Col xs={20} sm={24} md={24} lg={8} xl={8}>
                        <img className="image" src="/home1.jpg" alt="logo" />
                    </Col>
                </Row>
            </HeaderWrapper>
        );
    }
}

export default graphql(getCountries)(Countries);
