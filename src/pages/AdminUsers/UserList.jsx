import React, { useEffect } from 'react'

import { Space, Table, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import useRedux from '../../CustomHook/useRedux';
import { getUserListActionApi } from '../../redux/reducers/userReducer';
const columns = [
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    render: (text,record) => <NavLink to={`/admin/detail/${record.email}`}>{text}</NavLink>,
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <span>{text}</span>,
  }
  ,
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
    {
      "email": "aaa@gmail.com",
      "name": "aaa",
      "password": "2222222222",
      "gender": true,
      "phone": "09090909",
      "facebookId": "",
      "userTypeId": "CUSTOMER",
      "deleted": false,
      "avatar": "user-icon.png",
      "favoriteProducts": "[{\"id\":2,\"name\":\"Adidas Prophere Black White\",\"image\":\"https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png\"},{\"id\":17,\"name\":\"Van Old School\",\"image\":\"https://shop.cyberlearn.vn/images/van-old-school.png\"}]"
    },
    {
      "email": "bbb@gmail.com",
      "name": "bbb",
      "password": "123123",
      "gender": false,
      "phone": "09090909",
      "facebookId": "",
      "userTypeId": "CUSTOMER",
      "deleted": false,
      "avatar": "user-icon.png",
      "favoriteProducts": "[]"
    }
]




const UserList = () => {
    const {state,dispatch} = useRedux();
    const {userList} = state.userReducer;

    let userListResult = userList.map((user,index)=> {
      return {
        ...user,
        key:index
      }
    })
    useEffect(()=>{
        const actionThunk = getUserListActionApi();
        dispatch(actionThunk)
    },[])

  return (
    <div className='container'>
        <h3>User list</h3>
        <Table columns={columns} dataSource={userListResult} />
    </div>
  )
}

export default UserList