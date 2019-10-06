import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './drawerToggleButton';
import './menu.css';

class toolbar extends Component {
    logout = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('tokenExpiration', '');
        document.location.reload();
    };
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar__logo">
                        <Link to="/">
                            <img className="logo" src="/logo.png" alt="logo" />
                            Owerri Tech Community
                        </Link>
                    </div>
                    <div className="spacer" />
                    <div className="toolbar_navigation-items">
                        <ul>
                            {localStorage.getItem('token') && (
                                <li>
                                    <Link className="link" to="/profile">
                                        Dashboard
                                    </Link>
                                </li>
                            )}
                            {localStorage.getItem('token') && (
                                <li>
                                    <Link className="link" to="/bookings">
                                        Bookings
                                    </Link>
                                </li>
                            )}
                            {localStorage.getItem('token') && (
                                <li>
                                    <Link className="link" to="/events">
                                        Events
                                    </Link>
                                </li>
                            )}
                            {!localStorage.getItem('token') && (
                                <li>
                                    <Link className="link" to="/login">
                                        Login
                                    </Link>
                                </li>
                            )}
                            {!localStorage.getItem('token') && (
                                <li>
                                    <Link className="link" to="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                            )}
                            {localStorage.getItem('token') && (
                                <li>
                                    <Link className="link" onClick={this.logout} to="/">
                                        Log Out
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default toolbar;
