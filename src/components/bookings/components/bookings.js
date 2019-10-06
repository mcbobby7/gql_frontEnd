import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Skeleton, Spin, Button } from 'antd';
import 'antd/dist/antd.css';

const bookings = gql`
    query {
        bookings {
            event {
                title
                date
            }
            createdAt
            updatedAt
            _id
        }
    }
`;

const HeaderWrapper = styled.div`
    text-align: left;
    border: 3px solid #001529;
    padding: 3rem;
    margin: 2rem auto;
    width: 40rem;
    max-width: 97%;
    .loading {
        padding-top: 100px;
    }
    .load {
        padding: 50px;
    }
    ul {
        width: 50rem;
        max-width: 95%;
        margin: 2rem auto;
        list-style: none;
        padding: 0;
        color: red;
    }
    li {
        margin: 1rem 0;
        padding: 1rem;
        border: 3px solid #001529;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #001529;
    }
    li h2 {
        margin: 0;
        font-size: 1rem;
        color: red;
    }
    li p {
        margin: 0;
    }
`;

class Bookings extends Component {
    render() {
        return (
            <div>
                <Query query={bookings}>
                    {({ data, loading, error }) => {
                        if (loading)
                            return (
                                <HeaderWrapper>
                                    <Spin style={{ paddingLeft: '150px' }} size="large" />
                                </HeaderWrapper>
                            );
                        if (error) return <p>{error.message}</p>;
                        if (error) return <p>{error.message}</p>;
                        return data.bookings.map(booking => {
                            return (
                                <HeaderWrapper>
                                    <ul>
                                        <li key={booking._id}>
                                            <div>
                                                <h1>{booking.event.title}</h1>
                                                <h2
                                                    style={{
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {new Date(
                                                        booking.event.date,
                                                    ).toLocaleDateString()}
                                                </h2>
                                            </div>
                                            <div>
                                                <Button type="primary"> View This Evet </Button>
                                            </div>
                                        </li>
                                    </ul>
                                </HeaderWrapper>
                            );
                        });
                    }}
                </Query>
            </div>
        );
    }
}
export default Bookings;
