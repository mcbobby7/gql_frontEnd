import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background-color: #001529;
    color: white;
    font-size: 10px;
    margin: 0;
    padding-top: 15px;
    text-align: center;
    width: 100%;
    height: 50px;
    h5 {
        color: white;
    }
`;

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <h5> All rights reserved, Copyright © 2019 Mcbobby Madu.</h5>
            </FooterWrapper>
        );
    }
}

export default Footer;
