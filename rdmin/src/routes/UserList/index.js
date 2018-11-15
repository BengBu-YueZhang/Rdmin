import React from 'react'
import withTable from '@/hoc/withTable'
import { userList } from '@/services'
import { Button, Table, Divider, Tag, Input, DatePicker, Row, Col } from 'antd'
import { Map } from 'immutable'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name'
  },
  {
    title: '角色',
    render: (text) => {
      return (
        <React.Fragment>
          {
            text.roles.map(role => {
              return (
                <Tag key={role.id} color="blue">
                  { role.name }
                </Tag>
              )
            })
          } 
        </React.Fragment>
      )
    } 
  },
  {
    title: '操作',
    render: (text) => {
      return (
        <div>
          <Button>编辑</Button>
          <Divider type="vertical"/>
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

  componentDidMount () {
    this.handleFilter()
  }

  handleFilter = () => {
    const { onFilter } = this.props
    onFilter(this.state.filter)
  }

  handleNameChange = (e) => {
    const name = e.target.value
    this.setState(prevState => {
      return {
        filter: { ...prevState.filter, name }
      }
    })
  }

  render () {
    const { tableData, total } = this.props
    return (
      <div>
        <Row className="m-b-20">
          <Col span={6}>
            <Input.Search
              placeholder="用户姓名"
              enterButton
              onChange={this.handleNameChange}
              onSearch={this.handleFilter}
              value={this.state.filter.name}
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
          rowKey="id"
          pagination={{
            current: this.state.filter.pagestart,
            total: total
          }}
        />
      </div>
    )
  }
}

export default withTable(UserList, userList)
