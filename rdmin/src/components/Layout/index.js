import React from 'react'
import { Layout } from 'antd'
import Breadcrumbs from '@/components/Breadcrumbs'
import style from '@/components/Layout/style.scss'

const { Header, Sider, Content } = Layout

class LayoutView extends React.Component {
  render () {
    return (
      <Layout className={style.layout}>
        <Sider className={style.sider}>Sider</Sider>
        <Layout>
          <Header className={style.header}>Header</Header>
          <Content className={style.content}>
            <Breadcrumbs/>
            {
              this.props.children
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutView
