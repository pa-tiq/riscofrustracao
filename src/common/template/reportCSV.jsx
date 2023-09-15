import React from 'react'
import { CSVLink } from 'react-csv'


export default class ReportCSV extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataToDownload: this.props.dataToDownload
        }
        this.download = this.download.bind(this)
    }

    download(event) {
        // click the CSVLink component to trigger the CSV download
        this.csvLink.link.click()
    }

    render() {
        return (
            <div>
                <div>
                    <button type='button' className='btn btn-default' onClick={this.download}>{this.props.label}</button>
                </div>
                <div>
                    <CSVLink
                        data={this.state.dataToDownload}
                        filename="data.csv"
                        className="hidden"
                        ref={(r) => this.csvLink = r}
                        target="_blank" 
                    />
                </div>
            </div>
        )
    }
}
