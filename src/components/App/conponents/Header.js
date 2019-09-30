import React, { Component } from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import { Avatar, Tooltip } from 'antd';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #022140;
    font-size: 80%;
    margin: 0;
    padding: 15px;
    text-align: center;
    h1 {
        color: white;
    }
    .avatar {
        /* float: right; */
        margin-right: 70px;
    }
`;

class header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Zoom left cascade>
                    <h1> Website Name</h1>
                </Zoom>
                <Tooltip placement="bottom" title="Login">
                    <Avatar className="avatar" size="large" icon="user" />
                </Tooltip>
            </HeaderWrapper>
        );
    }
}

export default header;
