import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getCountries = gql`
    {
        countries {
            name
            code
            continent {
                name
            }
            languages {
                name
                native
            }
        }
    }
`;

const HeaderWrapper = styled.div`
    h2 {
        margin-top: 160px;
    }
`;

class Countries extends Component {
    render() {
        console.log(this.props);
        return (
            <HeaderWrapper>
                <h2>Nothing to display click countries to see all countries</h2>
            </HeaderWrapper>
        );
    }
}

export default graphql(getCountries)(Countries);
