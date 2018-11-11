import React from 'react'
import style from '@/routes/Login/style.scss'
import { Input } from 'antd'
import { Button } from 'antd'
import { connect } from 'dva'


class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }

  handleClick = () => {
    this.props.dispatch({ type: 'login/loginRequest', ...this.state })
  }

  handleChange = (type, event) => {
    this.setState({
      [type]: event.target.value
    })
  }

  render () {
    return (
      <section className={style['login-root']}>
        <div className={style['content']}>
          <div className={`${style['logo']} m-b-10`}></div>
          <div className={`m-b-10 w-per-100`}>
            <Input
              placeholder="用户名"
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
            />
          </div>
          <div className={`m-b-10 w-per-100`}>
            <Input
              placeholder="密码"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
            />
          </div>
          <Button type="primary" block onClick={this.handleClick}>登录</Button>
        </div>
      </section>
    )
  }
}

export default connect()(Login)
