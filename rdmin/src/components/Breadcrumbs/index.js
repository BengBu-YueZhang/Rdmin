import React from 'react'
import style from '@/components/Breadcrumbs/style.scss'

class Breadcrumbs extends React.Component {
  constructor (props) {
    super(props)
    console.log(this)
  }

  render () {
    return (
      <div className={style.root}></div>
    )
  }
}

export default Breadcrumbs