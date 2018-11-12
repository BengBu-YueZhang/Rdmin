import React from 'react'
import style from '@/components/Breadcrumbs/style.scss'
import { withRouter, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import RouterMap from '@/config/router'

class Breadcrumbs extends React.Component {
  render () {
    const { location } = this.props
    const pathSnippets = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            { RouterMap[url]['name'] }
          </Link>
        </Breadcrumb.Item>
      )
    })
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems)
    return (
      <div className={style.root}>
        <Breadcrumb>
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    )
  }
}

export default withRouter(Breadcrumbs)