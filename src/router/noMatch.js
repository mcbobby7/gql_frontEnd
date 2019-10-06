import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';

const HeaderWrapper = styled.div`
    text-align: left;
    border: 3px solid #001529;
    padding: 3rem;
    margin: 2rem auto;
    width: 40rem;
    max-width: 97%;
`;

class NoMatch extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={
                        <Button type="primary">
                            <Link to="/">Back Home</Link>
                        </Button>
                    }
                />
            </HeaderWrapper>
        );
    }
}
export default NoMatch;
