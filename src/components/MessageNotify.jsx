import React, { useEffect } from 'react'
import useRedux from '../CustomHook/useRedux'
import { message } from 'antd'
const MessageNotify = () => {
    //Lấy state message về từ redux 
    const { state, dispatch } = useRedux();
    const {type,content} = state.messageReducer.message;
    const [messageApi, contextHolder] = message.useMessage();

    console.log(type,content)

    useEffect(() => {
    console.log('nontify render')
        messageApi.open({
            type,
            content
        })
    },[state.messageReducer.message])
    return (
        <>
            {contextHolder}
        </>
    )
}

export default MessageNotify