import React from 'react'
import { Spin } from 'antd'
import { connect } from 'dva'
import { getSpin } from '@/selectors/Spin'
import style from '@/components/GlobalSpin/style.scss'

const mapStateToProps = state => {
  return {
    loading: getSpin(state)
  }
}

class GlobalSpin extends React.Component {
  render () {
    const { loading } = this.props
    return (
      loading && <div className={style.root}>
        <Spin spinning={loading} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(GlobalSpin)
