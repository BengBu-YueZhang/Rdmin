import React from 'react'
import withTable from '@/hoc/withTable'
import { userList, createUser } from '@/services'
import { Button, Table, Divider, Tag, Input, DatePicker, Row, Col } from 'antd'
import UserModal from './components/userModal'

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
        startAt: '',
        endAt: ''
      },
      visible: false,
      confirmLoading: false,
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

  handleRangeDateChange = (range) => {
    let startAt = range[0] ? range[0].toDate() : ''
    let endAt = range[1] ? range[1].toDate() : ''
    this.setState(prevState => {
      return {
        filter: { ...prevState.filter, startAt, endAt }
      }
    }, this.handleFilter)
  }

  handleOk = async (user) => {
    try {
      await this.handleVisibleChange(true, true)
      await createUser(user)
      await this.handleFilter()
    } finally {
      await this.handleVisibleChange(false, false)
    }
  }

  handleCancel = () => {
    this.handleVisibleChange(false)
  }

  handleVisibleChange = (visible = false, confirmLoading = false) => {
    return new Promise((resolve) => {
      this.setState({
        visible,
        confirmLoading
      }, resolve)
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
            <DatePicker.RangePicker
              onChange={this.handleRangeDateChange}
            />
          </Col>
          <Col span={11}>
            <div className="t-right">
              <Button onClick={
                this.handleVisibleChange.bind(this, true, false)
              }>创建用户</Button>
            </div>
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
        <UserModal
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        />
      </div>
    )
  }
}

export default withTable(UserList, userList)
