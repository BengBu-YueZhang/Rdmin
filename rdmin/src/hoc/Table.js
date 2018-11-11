import React from 'react'
import { Pagination } from 'antd'

/**
 * 高阶组件 - 表格
 * 需要思考 🤔 如何封装 📦
 */
function Table (TableComponent, PaginationComponent = Pagination) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      // 根据filter初始化state
      this.state = {
        pagesize: 10,
        pagestart: 1
      }
    }

    get = async () => {
    }

    handlePageChange (page, pageSize) {
    }

    handlePageSizeChange (current, size) {
    }

    render () {
      const { columns, data } = this.props
      return (
        <React.Fragment>
          <TableComponent
            columns={columns}
            dataSource={data}
          />
          <PaginationComponent
            current={this.state.pagestart}
            pageSize={this.state.pagesize}
          />
        </React.Fragment> 
      )
    }
  }
}

export default Table