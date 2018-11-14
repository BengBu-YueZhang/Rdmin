import React from 'react'
import Rpload from '@/components/Rpload'
// import style from '@/routes/FileUpLoad/style.scss'
// import { Icon, Button, InputNumber, Checkbox } from 'antd'
// import uuidv1 from 'uuid/v1'
// import axios from 'axios'

class FileUpLoad extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     isDragover: false,
  //     files: [],
  //     parallel: 2,
  //     queue: [],
  //     uploadQueue: []
  //   }
  //   this.inputFileRef = React.createRef()
  // }

  // handleDrag = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  // }

  // hanldeDragStart = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  // }

  // handleDragOver = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   this.setState({
  //     isDragover: true
  //   })
  // }

  // handleDragEnter = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   this.setState({
  //     isDragover: true
  //   })
  // }

  // handleDragLeave = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   this.setState({
  //     isDragover: false
  //   })
  // }

  // handleDragEnd = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   this.setState({
  //     isDragover: false
  //   })
  // }

  // handleDrop = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   let files = event.dataTransfer.files
  //   for (let i = 0; i < files.length; i++) {
  //     files[i].uuid = uuidv1()
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       isDragover: false,
  //       files: [ ...prevState.files, ...files ]
  //     }
  //   }, () => {
  //     this.handleSumbit()
  //   })
  // }

  // handleFileChange = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   for (let i = 0; i < this.inputFileRef.current.files.length; i++) {
  //     this.inputFileRef.current.files[i].uuid = uuidv1()
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       files: [ ...prevState.files, ...this.inputFileRef.current.files]
  //     }
  //   }, () => {
  //     this.handleSumbit()
  //   })
  // }

  // handleImageLoad = (imgSrc) => {
  //   window.URL.revokeObjectURL(imgSrc)
  // }

  // handleSumbit = () => {
  //   for (let i = 0; i < this.state.files.length; i++) {
  //     let formData = new FormData()
  //     formData.append('file', this.state.files[0])
  //     axios.post('https://api.justdodo.cn/upload/others', formData, {
  //       headers: {
  //         vf: 'zhangyuegogogo'
  //       }
  //     })
  //   }
  // }

  // // 上传测试, 使用李航的接口
  // handleSumbitTest = () => {
  // }

  render () {
    return (
      <div>
        <Rpload
          multiple={true}
        />
        {/* <div className="m-b-20">
          <Button.Group>
            <Button>自动上传</Button>
            <Button>手动上传</Button>
          </Button.Group>
        </div>
        <div className="m-b-20">
          上传并行数: <InputNumber min={1} max={10} value={this.state.parallel} />
        </div>
        <div className="m-b-20">
          <Checkbox>上传前删除 (自动上传时不可用)</Checkbox>
        </div>
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
              id="file"
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
              <div className={style['preview-wrapper']}>
                {
                  this.state.files.map(file => {
                    const imgSrc = window.URL.createObjectURL(file)
                    return (
                      <div key={file.uuid} className={style['preview']}>
                        <img
                          onLoad={() => this.handleImageLoad(imgSrc)}
                          className={style['preview-image']}
                          src={imgSrc}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </label>
          </form>
        </div> */}
      </div>
    )
  }
}

export default FileUpLoad
