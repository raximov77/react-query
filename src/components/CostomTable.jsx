import React from "react";
import { Table } from "antd";

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Surname',
        dataIndex: 'surname',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
]

function CustomTable({data}){
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default CustomTable;