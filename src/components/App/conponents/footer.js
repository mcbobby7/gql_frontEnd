import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background-color: #022140;
    color: white;
    font-size: 10px;
    margin: 0;
    padding-top: 15px;
    text-align: center;
    width: 100%;
    height: 50px;
    h1 {
        color: white;
    }
`;

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <h1> Copyright Mcbobby Madu.</h1>
            </FooterWrapper>
        );
    }
}

export default Footer;
