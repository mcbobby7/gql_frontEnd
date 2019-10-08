/* eslint-disable max-len */
/* eslint-disable sort-keys */
/* eslint-disable sort-keys */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Oluaka',
                value: 'Oluaka',
            },
            {
                text: 'Owerri Tech Hub',
                value: 'Owerri Tech Hub',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'obinze',
                value: 'obinze',
            },
            {
                text: 'yaradua Drive',
                value: 'yaradua Drive',
            },
            {
                text: 'Hubs',
                value: 'Hubs',
            },
            {
                text: 'Owerri',
                value: 'Owerri',
            },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
    },
];

const data = [
    {
        key: '1',
        name: 'Oluaka Institute',
        price: 3000,
        address: 'obinze by white house',
    },
    {
        key: '2',
        name: 'Tech Hub Africa',
        price: 500,
        address: 'yaradua Drive',
    },
    {
        key: '3',
        name: 'Owerri Tech Hub',
        price: 1000,
        address: '77 weathral rd',
    },
    {
        key: '4',
        name: 'Cold Hubs Limited',
        price: 32,
        address: 'relief market',
    },
];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

const HubWrapper = styled.div`
    padding-top: 40px;
    padding-left: 20px;
    h2 {
        padding-bottom: 20px;
    }
`;

class Hubs extends Component {
    render() {
        return (
            <HubWrapper>
                <h2>Hubs In Owerri</h2>
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </HubWrapper>
        );
    }
}

export default Hubs;
