/* eslint-disable sort-keys */

import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Spin, Button, Alert } from 'antd';
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
    state = {
        success: false,
    };

    onCancel = async bookingId => {
        console.log(bookingId);
        this.props.mutate({
            variables: {
                bookingId: bookingId,
            },
            refetchQueries: [{ query: bookings }],
        });
        this.setState({
            success: true,
        });
    };
    render() {
        return (
            <HeaderWrapper>
                {this.state.success && (
                    <Alert message="Booking Canceled Successfully" type="success" />
                )}
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
                            return data.bookings.map(booking => {
                                return (
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
                                                <Button
                                                    onClick={this.onCancel.bind(this, booking._id)}
                                                    type="primary"
                                                >
                                                    Cancel Bookings
                                                </Button>
                                            </div>
                                        </li>
                                    </ul>
                                );
                            });
                        }}
                    </Query>
                </div>
            </HeaderWrapper>
        );
    }
}
const CancelBook = gql`
    mutation($bookingId: ID!) {
        cancelBooking(bookingId: $bookingId) {
            title
        }
    }
`;
export default graphql(CancelBook)(Bookings);
