import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from '../components/App/conponents/App';
import Home from '../components/Home/components/home';
import Bookings from '../components/bookings/components/bookings';
import Events from '../components/events/components/events';
import Event from '../components/events/components/singleEvent';
import SignUp from '../components/auth/signUp';
import Login from '../components/auth/login';
import Profile from '../components/dashboard/components/profile';
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
                                <React.Fragment>
                                    {/* <Redirect exact from="/login" to="/" /> */}
                                    <Route exact path="/bookings" component={Bookings} />
                                    <Route exact path="/events" component={Events} />
                                    <Route exact path="/events/:id" component={Event} />
                                    <Route exact path="/profile" component={Profile} />
                                    <Route exact path="/" component={Home} />
                                </React.Fragment>
                            )}
                            {!localStorage.getItem('token') && (
                                <React.Fragment>
                                    {/* <Redirect exact from="/events/:id" to="/login" /> */}
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/signup" component={SignUp} />
                                    <Route exact path="/" component={Home} />
                                </React.Fragment>
                            )}
                            <Route component={NoMatch} />
                        </Switch>
                    </App>
                </ScrollToTop>
            </React.Fragment>
        );
    }
}

export default ReactRouter;
