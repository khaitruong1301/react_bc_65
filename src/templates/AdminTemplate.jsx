import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserAddOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import useRoute from '../CustomHook/useRoute';
const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {navigate} = useRoute();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider style={{minHeight:'100vh'}} trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <div className='logo m-2 mt-5'>
                    <img width={100} height={100} alt='logo' src='https://i.pravatar.cc?u=1' className='rounded rounded-circle mx-auto d-block' />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'User management',
                            onClick: (event) => {
                                navigate('/admin/users')
                            }
                        },
                        {
                            key: '2',
                            icon: <UserAddOutlined />,
                            label: 'Create user',
                            onClick:(event)=>{
                                navigate('/admin/user-create')
                            }
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
        )
}

export default AdminTemplate