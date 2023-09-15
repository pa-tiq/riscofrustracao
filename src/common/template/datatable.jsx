import React from 'react'
import { MDBDataTable } from 'mdbreact'


class DataTable extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="table-responsive">
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={this.props.data}
                />
            </div>
        )
    }
}

export default DataTable