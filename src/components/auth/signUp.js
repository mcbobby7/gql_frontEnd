import React from 'react';
import Roll from 'react-reveal/Roll';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, Container, Header, Input, Checkbox } from 'semantic-ui-react';

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
        password: '',
    };
    onSubmit = async () => {
        console.log(this.state);
        const response = await this.props.mutate({
            variables: this.state,
        });
        console.log(response);
    };
    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password } = this.state;
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

// const SignInForm = Form.create()(SignIn);
const register = gql`
    mutation($email: String!, $password: String!) {
        createUser(userInput: { email: $email, password: $password }) {
            email
        }
    }
`;

export default graphql(register)(SignIn);
