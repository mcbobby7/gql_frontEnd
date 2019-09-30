import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Reveal from 'react-reveal/Slide';
import { Collapse, Icon, Skeleton, Spin } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

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
    .loading {
        padding-top: 100px;
    }
    .load {
        padding: 50px;
    }
    p {
        color: red;
    }
`;

class Countries extends Component {
    displayCountries() {
        const data = this.props.data;
        if (data.loading) {
            return (
                <div className="loading">
                    <Spin className="load" size="large" />
                    <Skeleton active />
                </div>
            );
        } else {
            return data.countries.map(countrey => {
                return (
                    <Reveal bottom>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['AD']}
                            expandIcon={({ isActive }) => (
                                <Icon type="caret-right" rotate={isActive ? 90 : 0} />
                            )}
                        >
                            <Panel
                                header={countrey.name}
                                key={countrey.code}
                                style={{ textAlign: 'left' }}
                            >
                                <h4>
                                    Continent <b>: {countrey.continent.name}</b>
                                </h4>
                                {countrey.languages.map(language => {
                                    return (
                                        <div>
                                            <h4>
                                                Language <b>: {language.name}</b>
                                            </h4>
                                            <h4>
                                                Native <b>: {language.native}</b>
                                            </h4>
                                        </div>
                                    );
                                })}
                                <Link to={`/countries/${countrey.code}`}>
                                    <p>view this country</p>
                                </Link>
                            </Panel>
                        </Collapse>
                    </Reveal>
                );
            });
        }
    }
    render() {
        return <HeaderWrapper>{this.displayCountries()}</HeaderWrapper>;
    }
}

export default graphql(getCountries)(Countries);
