import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Jello from 'react-reveal/Slide';
import styled from 'styled-components';
import { Skeleton, Spin } from 'antd';
import 'antd/dist/antd.css';

const reposQuery = gql`
    query Myrepositories($id: String!) {
        country(code: $id) {
            name
            code
            phone
            currency
        }
    }
`;

const HeaderWrapper = styled.div`
    .loading {
        padding-top: 100px;
    }
    .load {
        padding: 50px;
    }
    .country {
        width: 80%;
        height: 100%;
        background-color: #022140;
        color: white;
        margin-top: 200px;
        margin-left: 50px;
        text-align: left;
        padding: 30px;
        padding-top: 50px;
        padding-bottom: 50px;
        border-radius: 20px;
    }
    .country h1 {
        color: white;
    }
`;

class Post extends Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <Query query={reposQuery} variables={{ id: params.code }}>
                    {({ data, loading, error }) => {
                        if (loading)
                            return (
                                <div style={{ paddingTop: '100px' }}>
                                    <Spin style={{ paddingTop: '50px' }} size="large" />
                                    <Skeleton active />
                                </div>
                            );
                        if (error) return <p>{error.message}</p>;
                        return (
                            <HeaderWrapper>
                                <Jello top>
                                    <div className="country" key={data.country.code}>
                                        <h1>
                                            <b>Country</b>: {data.country.name}
                                        </h1>
                                        <h1>
                                            <b>Phone</b>: {data.country.phone}
                                        </h1>
                                        <h1>
                                            <b>Currency</b>: {data.country.currency}
                                        </h1>
                                    </div>
                                </Jello>
                            </HeaderWrapper>
                        );
                    }}
                </Query>
            </div>
        );
    }
}
export default Post;
