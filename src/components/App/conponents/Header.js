import React, { Component } from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import { Menu, Dropdown, Avatar, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import Nav from './menu';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #001529;
    font-size: 80%;
    margin: 0;
    padding: 15px;
    text-align: center;
    clear: both;
    h1 {
        color: white;
    }
    .avatar {
        margin-right: 70px;
    }
    .img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`;

const menu = (
    <Menu>
        {!localStorage.getItem('token') && (
            <Menu.Item>
                <a rel="noopener noreferrer" href="/login">
                    Login
                </a>
            </Menu.Item>
        )}
        {!localStorage.getItem('token') && (
            <Menu.Item>
                <a rel="noopener noreferrer" href="/signup">
                    Sign Up
                </a>
            </Menu.Item>
        )}
    </Menu>
);

class header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Nav>menu</Nav>
                <Zoom left cascade>
                    <Link to="/">
                        <img className="img" src="/logo.png" alt="logo" />
                    </Link>
                </Zoom>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Tooltip placement="top" title="Sign up and Login">
                            <Avatar className="avatar" size="large" icon="user" />
                        </Tooltip>
                    </a>
                </Dropdown>
            </HeaderWrapper>
        );
    }
}

export default header;
