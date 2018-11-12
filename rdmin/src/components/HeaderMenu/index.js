import { connect } from 'dva'
import { Menu, Dropdown, Icon } from 'antd'
import { Layout } from 'antd'
import React from 'react'
import style from '@/components/HeaderMenu/style.scss'

const { Header } = Layout

class HeaderMenu extends React.Component {

  handleDropdownClick = (item) => {
    switch (item.key) {
      case 'logout':
        this.props.dispatch({
          type: 'login/logoutRequest'
        })
        break
    }
  }

  render () {
    return (
      <Header className={style.root}>
        <Dropdown overlay={
          <Menu onClick={this.handleDropdownClick}>
            <Menu.Item  key="logout">
              <a href="javascript:;">退出</a>
            </Menu.Item>
          </Menu>
        }>
          <a className="ant-dropdown-link" href="#">
            更多 <Icon type="down" />
          </a>
        </Dropdown>
      </Header>
    )
  }
}

export default connect()(HeaderMenu)
