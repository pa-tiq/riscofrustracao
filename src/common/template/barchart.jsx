import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
    labels: [],
    datasets: [
        {
            label: '',
            backgroundColor: getChartColor(),
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: []
        }
    ]
}

class BarChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            labels: props.labels,
            datasets: [{
                label: props.legend,
                backgroundColor: getChartColor(),
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: props.data
            }]
        }
    }

    render() {
        return (
            <div>
                <Bar
                    data={this.state}
                    height={this.props.height}
                    width={this.props.width} 
                    onElementsClick={(target)=>{
                        return this.props.onClickChartIndex(target[0]._index)
                    }}
                    getElementAtEvent={(target) => {
                        return this.props.onClickChartLabel(target[0]._view.label)
                    }}
                    options={{
                        title: {
                            display: true,
                            text: this.props.title,
                            fontSize: 14
                        },
                        legend: {
                            display: this.props.showlegend,
                            position: 'top'
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: this.props.labelY,
                                },
                                ticks: {
                                    min: 0,
                                },                              
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: this.props.labelX
                                }
                            }],
                        }     
                    }}
                />
            </div>
        )
    }
}
export default BarChart