import React, {useCallback, useEffect, useState} from 'react'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import {Layout as MyLayout, Menu, theme, Button} from 'antd'
import styles from './index.module.scss'

const {Header, Content, Footer, Sider} = MyLayout

function Layout() {
    const {
        token: {colorBgContainer},
    } = theme.useToken()
    const [collapsed, setCollapsed] = useState(false)
    const [collapsedWidth, setCollapsedWidth] = useState(80)

    const getClientWidth = useCallback((e: UIEvent) => {
        const w = e.target as Window
        if (576 < w.innerWidth && w.innerWidth < 992) {
            setCollapsed(true)
            setCollapsedWidth(80)
        } else if (w.innerWidth < 576) {
            setCollapsed(true)
            setCollapsedWidth(0)
        } else {
            setCollapsed(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', getClientWidth)
        return () => {
            window.removeEventListener('resize', getClientWidth)
        }
    }, [getClientWidth])

    const launchSide = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className={styles.root}>
            <MyLayout>
                <Sider
                    collapsedWidth={collapsedWidth}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}

                    // style={{
                    //     overflow: 'auto',
                    //     height: '100vh',
                    //     position: 'fixed',
                    //     left: 0,
                    //     top: 0,
                    //     bottom: 0,
                    // }}
                >
                    <div className="demo-logo-vertical"/>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        items={[
                            UserOutlined,
                            VideoCameraOutlined,
                            UploadOutlined,
                            UserOutlined,
                        ].map((icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }))}
                    />
                </Sider>
                <MyLayout>
                    <Header style={{padding: 0, background: colorBgContainer}}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={launchSide}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px'}}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                            }}
                        >
                            content
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </MyLayout>
            </MyLayout>
        </div>
    )
}

export default Layout
