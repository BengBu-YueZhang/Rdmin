
import { Modal, Button } from 'antd'
import React from 'react'
import { Form, Input, Select, Row, Col } from 'antd';

class UserModal extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      roles: []
    }
  }

  render () {
    const { visible, confirmLoading } = this.props
    return (
      <div>
        <Modal
          visible={visible}
          confirmLoading={confirmLoading}
        >
          <Form>
            <Form.Item label="用户名">
            <Input type="password" value={this.state.name} />
            </Form.Item>
            <Form.Item label="密码">
              <Input type="password" value={this.state.password} />
            </Form.Item>
            <Form.Item label="角色">
              <Select></Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default UserModal