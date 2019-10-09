import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, Container, Header, Input } from 'semantic-ui-react';

const LoginWrapper = styled.div`
    .input {
        margin: 10px;
    }
    .red {
        color: red;
    }
    .header {
        margin: 20px;
        text-align: center;
    }
`;

class SignIn extends React.Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    };
    onSubmit = async () => {
        console.log(this.state);
        const response = await this.props.mutate({
            variables: this.state,
        });
        if (response.data.createUser.token) {
            localStorage.setItem('token', response.data.createUser.token);
            localStorage.setItem('userId', response.data.createUser._id);
            localStorage.setItem('tokenExpiration', response.data.createUser.tokenExpiration);
        }
        this.setState({
            email: '',
            firstName: '',
            lastName: '',
            password: '',
        });
        this.props.history.push('/');
        document.location.reload();
    };
    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password, firstName, lastName } = this.state;
        return (
            <LoginWrapper>
                <Container text>
                    <Header className="header" as="h2">
                        Sign Up
                    </Header>
                    <label>
                        <span className="red">*</span>
                        Email
                    </label>
                    <Input
                        fluid
                        placeholder="Email"
                        icon="mail"
                        value={email}
                        name="email"
                        onChange={this.onChange}
                        className="input"
                    />
                    <label>
                        <span className="red">*</span>
                        First Name
                    </label>
                    <Input
                        fluid
                        placeholder="First Name"
                        icon="user"
                        value={firstName}
                        name="firstName"
                        onChange={this.onChange}
                        className="input"
                    />
                    <label>
                        <span className="red">*</span>
                        Last Name
                    </label>
                    <Input
                        fluid
                        placeholder="Last Name"
                        icon="user"
                        value={lastName}
                        name="lastName"
                        onChange={this.onChange}
                        className="input"
                    />
                    <label>
                        <span className="red">*</span>
                        Password
                    </label>
                    <Input
                        fluid
                        placeholder="Password"
                        type="password"
                        icon="user"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        className="input"
                    />
                    <Button onClick={this.onSubmit}>Sign Up</Button>
                </Container>
            </LoginWrapper>
        );
    }
}

const register = gql`
    mutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        createUser(
            userInput: {
                email: $email
                password: $password
                firstName: $firstName
                lastName: $lastName
            }
        ) {
            email
            token
            _id
            tokenExpiration
        }
    }
`;

export default graphql(register)(SignIn);
