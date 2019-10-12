import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, Container, Header, Input, Message, Form } from 'semantic-ui-react';

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

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    completed = async data => {
        localStorage.setItem('token', data.login.token);
        localStorage.setItem('userId', data.login.userId);
        localStorage.setItem('tokenExpiration', data.login.tokenExpiration);
        this.props.history.push('/');
        document.location.reload();
    };

    render() {
        const { email, password } = this.state;
        return (
            <LoginWrapper>
                <Container text>
                    <Header className="header" as="h2">
                        Log In
                    </Header>
                    <Mutation
                        mutation={login_mutaton}
                        variables={this.state}
                        onCompleted={data => this.completed(data)}
                    >
                        {(Login, { error, loading }) => (
                            <React.Fragment>
                                <Form loading={loading}>
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
                                    <Button onClick={Login}>Login</Button>
                                </Form>
                                {error && (
                                    <Message
                                        error
                                        header="Login Failed"
                                        content="Invalid Credencials"
                                    />
                                )}
                            </React.Fragment>
                        )}
                    </Mutation>
                </Container>
            </LoginWrapper>
        );
    }
}

const login_mutaton = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            email
            userId
            tokenExpiration
            token
        }
    }
`;

export default SignIn;
