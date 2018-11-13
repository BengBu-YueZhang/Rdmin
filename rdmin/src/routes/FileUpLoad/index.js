import React from 'react'
import style from '@/routes/FileUpLoad/style.scss'
import { Icon } from 'antd'
import uuidv1 from 'uuid/v1'

class FileUpLoad extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isDragover: false,
      files: []
    }
    this.inputFileRef = React.createRef()
  }

  handleDrag = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  hanldeDragStart = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  handleDragOver = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      isDragover: true
    })
  }

  handleDragEnter = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      isDragover: true
    })
    
  }

  handleDragLeave = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      isDragover: false
    })
  }

  handleDragEnd = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      isDragover: false
    })
  }

  handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    let files = event.dataTransfer.files
    for (let i = 0; i < files.length; i++) {
      files[i].uuid = uuidv1()
    }
    this.setState((prevState) => {
      return {
        isDragover: false,
        files: [
          ...prevState.files,
          ...files
        ]
      }
    })
  }

  handleFileChange = (event) => {
    event.preventDefault()
    event.stopPropagation()
    for (let i = 0; i < this.inputFileRef.current.files.length; i++) {
      this.inputFileRef.current.files[i].uuid = uuidv1()
    }
    this.setState((prevState) => {
      return {
        files: [
          ...prevState.files,
          ...this.inputFileRef.current.files
        ]
      }
    })
  }

  handleImageLoad = (event) => {
    console.log(event)
  }

  render () {
    return (
      <div className={style['upload-box-wrapper']}>
        <form
          onDrag={this.handleDrag}
          onDragStart={this.hanldeDragStart}
          onDragEnd={this.handleDragEnd}
          onDragOver={this.handleDragOver}
          onDragEnter={this.handleDragEnter}
          onDragLeave={this.handleDragLeave}
          onDrop={this.handleDrop}
          className={`${style['upload-form']} ${this.state.isDragover && style['is-dragover'] }`}
          method="post" action=""
          encType="multipart/form-data"
        >
          <input
            ref={this.inputFileRef}
            onChange={this.handleFileChange}
            className={style['input-file']}
            type="file"
            name="files[]"
            id="file"
            data-multiple-caption="{count} files selected"
            multiple
          />
          <label
            className={style['upload-label']}
            htmlFor="file">
            <Icon
              type="plus"
              className={style.icon}
            />
            <strong>选择文件</strong>
            <span className="box__dragndrop">或拖拽文件到这里</span>
            {/* 预览图片 */}
            <div className={style['preview-wrapper']}>
              {
                this.state.files.map(file => {
                  return (
                    <div key={file.uuid} className={style['preview']}>
                      <img
                        onLoad={() => this.handleImageLoad}
                        className={style['preview-image']}
                        src={window.URL.createObjectURL(file)}
                      />
                    </div>
                  )
                })
              }
            </div>
          </label>
        </form>
      </div>
    )
  }
}

export default FileUpLoad
