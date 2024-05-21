import React, { useState } from 'react'
import { Rate } from 'antd';
import { Button, message, Space } from 'antd';
//copy biến ....
import { RiseOutlined } from '@ant-design/icons'
import TableAntd from './TableAntd';

const DemoAntd = () => {
    const [score, setCore] = useState(1)
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
            icon:<RiseOutlined />
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    };
    return (
        <div className='container'>
            <h3>Sử dụng antd component</h3>
            {score}
            <Rate allowHalf defaultValue={score} onChange={(value) => {
                console.log(value)
                setCore(value)
            }} />
            {contextHolder}
            <Space>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </Space>
            <h3>Table</h3>
            <TableAntd />
        </div>
    )
}

export default DemoAntd

