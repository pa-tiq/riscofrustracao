import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    labels: [],
    datasets: [
        {
            label: '',
            backgroundColor: '#90caf9',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: []
        }
    ]
}

class LineChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            labels: props.labels,
            datasets: props.datasets,
            datasets2: [{
                label: props.legend,
                backgroundColor: '#90caf9', //'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: props.data
            }]
        }
    }

    render() {
        return (
            <div>
                <Line
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
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem, data) {
                                    var value = tooltipItem.yLabel;
                                    return 'R$ ' + value.toLocaleString('pt-BR', {minimumFractionDigits: 2})
                                    //return tooltipItem.yLabel.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, 'R$ $&,')
                                }
                            }
                        }
                    }}
                />
            </div>
        )
    }
}
export default LineChart