import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/App/conponents/App';
import Home from '../components/Home/components/home';
import Countries from '../components/Countries/components/countries';
import Country from '../components/Countrey/components/country';

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/countries" component={Countries} />
                    <Route exact path="/countries/:code" component={Country} />
                </App>
            </React.Fragment>
        );
    }
}

export default ReactRouter;
