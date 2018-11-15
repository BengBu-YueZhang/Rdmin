
import { Modal, Button } from 'antd'
import React from 'react'
import { Form, Input, Select, Row, Col } from 'antd'
import { connect } from 'dva'
import { getRoles } from '@/selectors/Role'

const mapStateToProps = state => {
  return {
    roles: getRoles(state)
  }
}

class UserModal extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      roles: []
    }
  }

  handleChange = (type, result) => {
    switch (type) {
      case 'name':
      case 'password':
        this.setState({
          [type]: result.target.value
        })
        break
      case 'roles':
        this.setState({
          [type]: result
        })
        break
    }
  }

  handleOk = () => {
  }

  handleCancel = () => {
  }

  render () {
    const { visible, confirmLoading, roles } = this.props
    return (
      <div>
        <Modal
          visible={visible}
          confirmLoading={confirmLoading}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item label="用户名">
            <Input onChange={this.handleChange.bind(this, 'name')} value={this.state.name} />
            </Form.Item>
            <Form.Item label="密码">
              <Input type="password" onChange={this.handleChange.bind(this, 'password')} value={this.state.password} />
            </Form.Item>
            <Form.Item label="角色">
              <Select
                onChange={this.handleChange.bind(this, 'roles')}
                mode="multiple"
                value={this.state.roles}>
                {
                  roles && roles.map(role => {
                    return (
                      <Select.Option key={role.id} value={role.id}>
                        { role.name }
                      </Select.Option>
                    )
                  })
                }
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserModal)