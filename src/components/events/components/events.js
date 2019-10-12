/* eslint-disable sort-keys */

import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { graphql, Query } from 'react-apollo';
import { Spin, Drawer, Button, Alert } from 'antd';
import 'antd/dist/antd.css';
import { Container, Input, TextArea } from 'semantic-ui-react';
import 'react-day-picker/lib/style.css';
import { Link } from 'react-router-dom';

const allEvents = gql`
    query {
        events {
            _id
            title
            description
            price
            date
            creator {
                email
                _id
                createdEvents {
                    title
                    date
                    description
                }
            }
        }
    }
`;

const HeaderWrapper = styled.div`
    text-align: center;
    border: 3px solid #001529;
    padding: 3rem;
    margin: 2rem auto;
    width: 40rem;
    max-width: 97%;
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
const FormHolder = styled.div`
    .input {
        margin: 10px;
        width: 400px;
    }
    .red {
        color: red;
    }
    .container {
        margin-right: 10px;
    }
`;

class Events extends Component {
    state = {
        date: '',
        description: '',
        modalvisible: false,
        price: '',
        title: '',
        visible: false,
        success: false,
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    onSubmit = async () => {
        const response = await this.props.mutate({
            variables: {
                date: this.state.date,
                description: this.state.description,
                price: this.state.price,
                title: this.state.title,
            },
            refetchQueries: [{ query: allEvents }],
        });
        this.setState({
            success: true,
            visible: false,
        });
    };
    showModal = () => {
        this.setState({
            modalvisible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            modalvisible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            modalvisible: false,
        });
    };

    render() {
        const { title, date, description, price } = this.state;
        return (
            <div>
                <HeaderWrapper>
                    <Button type="primary" onClick={this.showDrawer}>
                        Create Event
                    </Button>
                    <Drawer
                        title="Create Event"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        width="500"
                    >
                        <FormHolder>
                            <Container className="container" text>
                                <label>
                                    <span className="red">*</span>
                                    Title
                                </label>
                                <Input
                                    fluid
                                    placeholder="Title"
                                    value={title}
                                    name="title"
                                    onChange={this.onChange}
                                    className="input"
                                />
                                <label>
                                    <span className="red">*</span>
                                    Date
                                </label>
                                <br />
                                <Input
                                    type="date"
                                    placeholder="Date"
                                    value={date}
                                    name="date"
                                    onChange={this.onChange}
                                    className="input"
                                />
                                <br />
                                <label>
                                    <span className="red">*</span>
                                    Price
                                </label>
                                <Input
                                    fluid
                                    type="text"
                                    placeholder="Price"
                                    name="price"
                                    value={price}
                                    onChange={this.onChange}
                                    className="input"
                                />
                                <TextArea
                                    fluid
                                    placeholder="Description"
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={this.onChange}
                                    className="input"
                                />
                                <br />
                                <Button type="primary" onClick={this.onSubmit}>
                                    Create Event
                                </Button>
                            </Container>
                        </FormHolder>
                    </Drawer>
                </HeaderWrapper>
                <HeaderWrapper>
                    {this.state.success && (
                        <Alert message="Event Created Successfully" type="success" />
                    )}
                    <Query query={allEvents}>
                        {({ data, loading, error }) => {
                            if (loading)
                                return (
                                    <div style={{ paddingTop: '100px' }}>
                                        <Spin style={{ paddingTop: '50px' }} size="large" />
                                        <h3>Loading Events...</h3>
                                    </div>
                                );
                            if (error) return <p>{error.message}</p>;
                            return data.events.map(event => {
                                return (
                                    <ul>
                                        <li key={event.id}>
                                            <div>
                                                <h1>{event.title}</h1>
                                                <h2
                                                    style={{
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {new Date(event.date).toLocaleDateString()}
                                                </h2>
                                            </div>
                                            <div>
                                                {localStorage.getItem('userId') ===
                                                    event.creator._id && (
                                                    <p>you are the owner of the event</p>
                                                )}
                                                <Button type="primary">
                                                    <Link to={`/events/${event._id}`}>
                                                        View This Event
                                                    </Link>
                                                </Button>
                                            </div>
                                        </li>
                                    </ul>
                                );
                            });
                        }}
                    </Query>
                </HeaderWrapper>
            </div>
        );
    }
}

const CreateEvent = gql`
    mutation($title: String!, $description: String!, $price: String!, $date: String!) {
        createEvent(
            eventInput: { title: $title, description: $description, price: $price, date: $date }
        ) {
            title
            date
            description
            _id
        }
    }
`;

export default graphql(CreateEvent)(Events);
