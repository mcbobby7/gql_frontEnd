import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Spin, Descriptions, Alert } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'semantic-ui-react';

const allEvents = gql`
    query($eventId: ID!) {
        event(eventId: $eventId) {
            _id
            description
            date
            title
            price
            creator {
                _id
                email
                createdEvents {
                    _id
                    title
                }
            }
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
`;

class SingleEvent extends Component {
    state = {
        success: false,
    };

    onBook = async () => {
        const { params } = this.props.match;
        this.props.mutate({
            variables: {
                eventId: params.id,
            },
        });
        this.setState({
            success: true,
        });
    };
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <Query query={allEvents} variables={{ eventId: params.id }}>
                    {({ data, loading, error }) => {
                        if (loading)
                            return (
                                <div style={{ paddingTop: '100px' }}>
                                    <HeaderWrapper>
                                        <Spin
                                            style={{
                                                paddingLeft: '40px',
                                                paddingTop: '30px',
                                            }}
                                            size="large"
                                        />
                                        <p>Fetching Event...</p>
                                    </HeaderWrapper>
                                </div>
                            );
                        if (error) return <p>{error.message}</p>;
                        return (
                            <HeaderWrapper>
                                {this.state.success && (
                                    <Alert message="Booked Successfully" type="success" />
                                )}
                                <Descriptions title={data.event.title} layout="vertical">
                                    <Descriptions.Item label="Title">
                                        {data.event.title}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Date">
                                        {new Date(data.event.date).toLocaleDateString()}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Price">free</Descriptions.Item>
                                    <Descriptions.Item label="description" span={2}>
                                        {data.event.description}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Creator">
                                        {data.event.creator.email}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="">
                                        <Button onClick={this.onBook}> book Event </Button>
                                    </Descriptions.Item>
                                </Descriptions>
                            </HeaderWrapper>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

const BookEvent = gql`
    mutation($eventId: ID!) {
        bookEvent(eventId: $eventId) {
            createdAt
            updatedAt
        }
    }
`;
export default graphql(BookEvent)(SingleEvent);
