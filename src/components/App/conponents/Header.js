import React, { Component } from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import { Menu, Dropdown, Icon, Avatar, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

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
        /* float: right; */
        margin-right: 70px;
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
        {/* <Menu.Item>
            <button onClick={this.onClick}>Log Out</button>
        </Menu.Item> */}
    </Menu>
);

class header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Zoom left cascade>
                    <Link to="/">
                        <h1> Website Name</h1>
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
