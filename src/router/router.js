import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/App/conponents/App';
import Home from '../components/Home/components/home';
import Bookings from '../components/bookings/components/bookings';
import Events from '../components/events/components/events';
import SignUp from '../components/auth/signUp';
import Login from '../components/auth/login';

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/bookings" component={Bookings} />
                    <Route exact path="/events" component={Events} />
                </App>
            </React.Fragment>
        );
    }
}

export default ReactRouter;
