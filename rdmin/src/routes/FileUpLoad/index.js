import React from 'react'
import Rpload from '@/components/Rpload'

class FileUpLoad extends React.Component {

  render () {
    return (
      <div>
        <Rpload
          multiple={true}
        />
      </div>
    )
  }
}

export default FileUpLoad
