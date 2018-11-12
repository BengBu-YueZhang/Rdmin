import React from 'react'
import { Layout } from 'antd'
import Breadcrumbs from '@/components/Breadcrumbs'
import style from '@/components/Layout/style.scss'
import HeaderMenu from '@/components/HeaderMenu'

const { Sider, Content } = Layout

class LayoutView extends React.Component {

  render () {
    return (
      <Layout className={style.layout}>
        <Sider className={style.sider}>Sider</Sider>
        <Layout>
          <HeaderMenu/>
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
