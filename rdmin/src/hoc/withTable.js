import React from 'react'

function Table (TableComponent, selectData) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        list: [],
        total: 0,
        filter: {}
      }
    }

    get = async () => {
      const { data: { list, total } } = await selectData(this.state.filter)
      this.setState({ list, total })
    }

    handleFilter = (filter) => {
      this.setState((prevState) => {
        return { filter: { ...prevState.filter, ...filter } }
      }, this.get)
    }

    render () {
      return (
        <React.Fragment>
          <TableComponent
            total={this.state.total}
            tableData={this.state.list}
            onFilter={this.handleFilter}
          />
        </React.Fragment> 
      )
    }
  }
}

export default Table
