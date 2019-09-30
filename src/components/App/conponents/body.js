import React, { Component } from 'react';
import styled from 'styled-components';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const BodyWrapper = styled.div`
    margin: 0;
    text-align: center;
    width: 700px;
    img {
        padding-top: 30px;
        padding-bottom: 60px;
        width: 80%;
    }
    h3 {
        padding: 20px;
    }
    b {
        color: red;
    }
    i {
        color: red;
    }
    ol {
        text-align: left;
    }
    .primary {
        padding: 30px;
    }
    .flag {
        width: 200px;
        height: 200px;
    }
    button {
        margin: 35px;
    }
`;

class Body extends Component {
    render() {
        return (
            <BodyWrapper>
                <Flip left>
                    <Link to="/">
                        <img src="/scoutbase-logo.png" alt="logo" />
                    </Link>
                </Flip>
                <div>
                    <Slide left>
                        <h3>
                            This is my first project for <b> Scout Base </b> and I hope to be called
                            for an interview
                        </h3>
                        <h2>
                            <b>Guide</b>
                        </h2>
                        <ol>
                            <li>
                                <p>To view all countries click the button View All Countries</p>
                            </li>
                            <li>
                                <p>
                                    To view a single country navigate to all countries and click
                                    view this country
                                </p>
                            </li>

                            <li>
                                <p>To navigate to back to home page click the image above</p>
                            </li>
                        </ol>
                    </Slide>
                </div>
                <Link to="/countries">
                    <Button className="button" type="primary">
                        View All Countries
                    </Button>
                </Link>
            </BodyWrapper>
        );
    }
}

export default Body;
