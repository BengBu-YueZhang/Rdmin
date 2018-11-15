import React from 'react'
import withTable from '@/hoc/withTable'
import { userList } from '@/services'
import { Button, Table, Divider, Tag, Input, DatePicker, Row, Col } from 'antd'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '角色',
    dataIndex: 'roles',
    key: 'roles',
    render: () => null
  },
  {
    title: '创建日期',
    dataIndex: 'createDate',
    key: 'createDate',
    render: () => null
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => {
      console.log(text)
      console.log(record)
      return (
        <div>
          <Button>编辑</Button>
          <Button type="danger">删除</Button>
        </div>
      )
    }
  }
]

class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: {
        pagestart: 1,
        pagesize: 10,
        name: '',
        createDate: ''
      }
    }
  }

  render () {
    const { tableData } = this.props
    return (
      <div>
        <Row className="m-b-20">
          <Col span={6}>
            <Input.Search
              placeholder="用户姓名"
              enterButton
            />
          </Col>
          <Col span={1}></Col>
          <Col span={6}>
            <DatePicker.RangePicker/>
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={tableData}
        />
      </div>
    )
  }
}

export default withTable(UserList, userList)
