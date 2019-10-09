/* eslint-disable sort-keys */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Query, graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Spin, Descriptions, Modal, Button } from 'antd';
import { Container, Header, Input } from 'semantic-ui-react';

const singleUser = gql`
    query {
        user {
            email
            github
            lastName
            firstName
            twitter
            linkedIn
            profilePic
            occupation
            createdEvents {
                title
                description
            }
        }
    }
`;

const HeaderWrapper = styled.div`
    text-align: left;
    border: 3px solid #001529;
    padding: 3rem;
    margin: 2rem auto;
    width: 60rem;
    max-width: 97%;
    .loading {
        padding-top: 100px;
    }
    .load {
        padding: 50px;
    }
`;

class Profile extends Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        twitter: '',
        linkedIn: '',
        github: '',
        occupation: '',
        visible: false,
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    onSubmit = async () => {
        const { email, firstName, lastName, github, occupation, twitter, linkedIn } = this.state;
        console.log(this.state);
        const response = await this.props.mutate({
            variables: {
                email: email,
                firstName: firstName,
                lastName: lastName,
                twitter: twitter,
                linkedIn: linkedIn,
                github: github,
                occupation: occupation,
            },
            refetchQueries: [{ query: singleUser }],
        });
        this.setState({
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            visible: false,
        });
    };
    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, firstName, lastName, github, occupation, twitter, linkedIn } = this.state;
        return (
            <HeaderWrapper>
                <Query query={singleUser}>
                    {({ data, loading, error }) => {
                        if (loading)
                            return (
                                <div style={{ paddingTop: '100px' }}>
                                    <Spin
                                        style={{
                                            paddingLeft: '40px',
                                            paddingTop: '30px',
                                        }}
                                        size="large"
                                    />
                                    <p>Fetching User...</p>
                                </div>
                            );
                        if (error) return <p>{error.message}</p>;
                        return (
                            <Descriptions title={data.user.firstName} layout="vertical">
                                <Descriptions.Item label="First Name">
                                    {data.user.firstName}
                                </Descriptions.Item>
                                <Descriptions.Item label="Last Name">
                                    {data.user.lastName}
                                </Descriptions.Item>
                                <Descriptions.Item label="Email">
                                    {data.user.email}
                                </Descriptions.Item>
                                <Descriptions.Item label="Twiter">
                                    {data.user.twitter}
                                </Descriptions.Item>
                                <Descriptions.Item label="LinkedIn">
                                    {data.user.linkedIn}
                                    <i class="deaf icon"></i>
                                </Descriptions.Item>
                                <Descriptions.Item label="Github">
                                    {data.user.github}
                                </Descriptions.Item>
                                <Descriptions.Item>
                                    <Button type="primary" onClick={this.showModal}>
                                        Edit Profile
                                    </Button>
                                    <Modal
                                        title="Edit Profile"
                                        visible={this.state.visible}
                                        onOk={this.onSubmit}
                                        onCancel={this.handleCancel}
                                    >
                                        <label>Email</label>
                                        <Input
                                            fluid
                                            placeholder="Email"
                                            icon="mail"
                                            value={email}
                                            name="email"
                                            onChange={this.onChange}
                                            className="input"
                                        />
                                        <label>First Name</label>
                                        <Input
                                            fluid
                                            placeholder="First Name"
                                            icon="user"
                                            value={firstName}
                                            name="firstName"
                                            onChange={this.onChange}
                                            className="input"
                                        />
                                        <label>Last Name</label>
                                        <Input
                                            fluid
                                            placeholder="Last Name"
                                            icon="user"
                                            value={lastName}
                                            name="lastName"
                                            onChange={this.onChange}
                                            className="input"
                                        />
                                        <label>Twiter</label>
                                        <Input
                                            fluid
                                            placeholder="twitter URL"
                                            icon="twitter"
                                            name="twitter"
                                            value={twitter}
                                            onChange={this.onChange}
                                            className="input"
                                        />
                                        <label>LinkedIn</label>
                                        <Input
                                            fluid
                                            placeholder="linkedIn URL"
                                            icon="linkedin"
                                            name="linkedIn"
                                            value={data.user.linkedIn}
                                            onChange={this.onChange}
                                            className="input"
                                        />
                                        <label>Github</label>
                                        <Input
                                            fluid
                                            placeholder="Github URL"
                                            icon="github"
                                            name="github"
                                            value={github}
                                            onChange={this.onChange}
                                            className="input"
                                        />
                                        <label>Occupation</label>
                                        <Input
                                            fluid
                                            placeholder="Occupation"
                                            name="occupation"
                                            value={occupation}
                                            onChange={this.onChange}
                                            className="input"
                                        />
                                    </Modal>
                                </Descriptions.Item>
                            </Descriptions>
                        );
                    }}
                </Query>
            </HeaderWrapper>
        );
    }
}
const UpdateProfile = gql`
    mutation(
        $email: String!
        $firstName: String!
        $lastName: String!
        $linkedIn: String!
        $github: String!
        $twitter: String!
        $occupation: String!
    ) {
        updateUser(
            updateUserInput: {
                email: $email
                firstName: $firstName
                lastName: $lastName
                linkedIn: $linkedIn
                github: $github
                twitter: $twitter
                occupation: $occupation
            }
        ) {
            email
        }
    }
`;

export default graphql(UpdateProfile)(Profile);
