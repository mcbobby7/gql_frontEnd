import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from '../components/App/conponents/App';
import Home from '../components/Home/components/home';
import Bookings from '../components/bookings/components/bookings';
import Events from '../components/events/components/events';
import Event from '../components/events/components/singleEvent';
import SignUp from '../components/auth/signUp';
import Login from '../components/auth/login';
import NoMatch from './noMatch';
import ScrollToTop from './scrollToTop';

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTop>
                    <App>
                        <Switch>
                            {localStorage.getItem('token') && (
                                <Redirect exact from="/login" to="/" />
                            )}
                            {!localStorage.getItem('token') && (
                                <Redirect exact from="/events/:id" to="/login" />
                            )}
                            <Route exact path="/" component={Home} />
                            {!localStorage.getItem('token') && (
                                <Route exact path="/login" component={Login} />
                            )}
                            {!localStorage.getItem('token') && (
                                <Route exact path="/signup" component={SignUp} />
                            )}
                            {localStorage.getItem('token') && (
                                <Route exact path="/bookings" component={Bookings} />
                            )}
                            {localStorage.getItem('token') && (
                                <Route exact path="/events" component={Events} />
                            )}
                            <Route exact path="/events/:id" component={Event} />
                            <Route component={NoMatch} />
                        </Switch>
                    </App>
                </ScrollToTop>
            </React.Fragment>
        );
    }
}

export default ReactRouter;
