import React, { Component } from 'react';
import './menu.css';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

class sideDrawer extends Component {
    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
                    {localStorage.getItem('token') && (
                        <li>
                            <Icon style={{ color: 'white', padding: '20px' }} type="user" />
                            <Link className="link" to="/profile">
                                Dashboard
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                    )}
                    {localStorage.getItem('token') && (
                        <li>
                            <Icon style={{ color: 'white', padding: '20px' }} type="video-camera" />
                            <Link className="link" to="/bookings">
                                Bookings
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                    )}
                    {localStorage.getItem('token') && (
                        <li>
                            <Icon style={{ color: 'white', padding: '20px' }} type="calendar" />
                            <Link className="link" to="/events">
                                Events
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                    )}
                    {localStorage.getItem('token') && (
                        <li>
                            <Icon style={{ color: 'white', padding: '20px' }} type="message" />
                            <Link className="link" to="/notification">
                                Notification
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                    )}
                    {!localStorage.getItem('token') && (
                        <li>
                            <Icon style={{ color: 'white', padding: '20px' }} type="user" />
                            <Link className="link" to="/login">
                                Login
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                    )}
                    {!localStorage.getItem('token') && (
                        <li>
                            <Icon style={{ color: 'white', padding: '20px' }} type="user" />
                            <Link className="link" to="/signup">
                                Sign Up
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                    )}
                    {localStorage.getItem('token') && (
                        <li>
                            <Icon style={{ color: 'white', padding: '20px' }} type="user" />
                            <Link className="link" onClick={this.logout} to="/">
                                Log Out
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

export default sideDrawer;
