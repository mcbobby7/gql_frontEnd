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
        password: '',
    };

    onSubmit = async () => {
        console.log(this.state);
        const response = await this.props.mutate({
            variables: this.state,
        });
        if (response.data.login.token) {
            localStorage.setItem('token', response.data.login.token);
            localStorage.setItem('userId', response.data.login.userId);
            localStorage.setItem('tokenExpiration', response.data.login.tokenExpiration);
        }
        this.setState({
            email: '',
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
        const { email, password } = this.state;
        return (
            <LoginWrapper>
                <Container text>
                    <Header className="header" as="h2">
                        Log In
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
                    <Button onClick={this.onSubmit}>Login</Button>
                </Container>
            </LoginWrapper>
        );
    }
}

const login = gql`
    mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            email
            userId
            tokenExpiration
            token
        }
    }
`;

export default graphql(login)(SignIn);
