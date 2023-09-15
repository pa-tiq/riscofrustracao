import React, { Component } from 'react';
import { Pie } from 'chart.js';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: props.labels,
      datasets: [
        {
          backgroundColor: props.color,
          label: props.legend,
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: props.data,
        },
      ],
    };
  }

  render() {
    // console.log(this.state.datasets)
    return (
      <div>
        <Pie
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets,
          }}
          height={this.props.height}
          width={this.props.width}
          onElementsClick={(target) => {
            return this.props.onClickChartIndex(target[0]._index);
          }}
          getElementAtEvent={(target) => {
            return this.props.onClickChartLabel(target[0]._view.label);
          }}
          options={{
            title: {
              display: true,
              text: this.props.title,
              fontSize: 14,
            },
            legend: {
              display: true,
              position: 'top',
            },
          }}
        />
      </div>
    );
  }
}
export default PieChart;
