import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Reveal from 'react-reveal/Slide';
import { Collapse, Icon, Skeleton, Spin, Drawer, Button } from 'antd';
import 'antd/dist/antd.css';
import { Container, Input, TextArea } from 'semantic-ui-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Link } from 'react-router-dom';

const getCountries = gql`
    {
        countries {
            name
            code
            languages {
                name
                native
            }
            continent {
                name
            }
        }
    }
`;

const HeaderWrapper = styled.div`
    text-align: center;
    border: 3px solid #001529;
    padding: 3rem;
    margin: 2rem auto;
    width: 30rem;
    max-width: 80%;
    .input {
        margin: 10px;
    }
    .red {
        color: red;
    }
`;

class Events extends Component {
    state = {
        date: '',
        description: '',
        price: '',
        title: '',
        visible: false,
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
        console.log(this.state);
        const response = await this.props.mutate({
            variables: {
                date: this.state.date,
                description: this.state.description,
                price: this.state.price,
                title: this.state.title,
            },
        });
        console.log(response);
        //     if (response.data.login.token) {
        //         localStorage.setItem('token', response.data.login.token);
        //         localStorage.setItem('userId', response.data.login.userId);
        //         localStorage.setItem('tokenExpiration', response.data.login.tokenExpiration);
        //     }
        //     this.props.history.push('/');
        // };
        // onChange = e => {
        //     const { name, value } = e.target;
        //     this.setState({ [name]: value });
    };

    render() {
        const { title, date, description, price } = this.state;
        return (
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
                    <Container text>
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
                        <Input
                            fluid
                            type="date"
                            placeholder="Date"
                            value={date}
                            name="date"
                            onChange={this.onChange}
                            className="input"
                        />
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
                        {/* <label>
                            <span className="red">*</span>
                            Description
                        </label> */}
                        <TextArea
                            fluid
                            placeholder="Description"
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.onChange}
                            className="input"
                        />
                        <Button onClick={this.onSubmit}>Login</Button>
                    </Container>
                </Drawer>
            </HeaderWrapper>
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
