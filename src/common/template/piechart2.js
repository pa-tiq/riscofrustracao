import { useEffect, useRef, useState } from 'react';
import { ArcElement, Chart, PieController, Legend, Tooltip } from 'chart.js';

const PieChart = ({ height, width, title, labels, data }) => {
  const chartRef = useRef(null);
  const [pieChart, setPieChart] = useState(null);

  const alwaysShowTooltip = {
    id: 'alwaysShowTooltip',
    afterDraw(chart, args, options) {
      const { ctx } = chart;
      ctx.save();
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          if (chart.data.datasets[i].data[index] !== '0.00') {
            const { x, y } = datapoint.tooltipPosition();
            if (chart.data.labels[index][0] === 'R') {
              console.log(chart.data.labels[index]);
            }
            const text =
              (chart.data.labels[index][0] === 'R'
                ? chart.data.labels[index].substring(6)
                : chart.data.labels[index]) +
              ': ' +
              chart.data.datasets[i].data[index];
            const textWidth = ctx.measureText(text).width;
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fillRect(x - (textWidth + 10) / 2, y - 25, textWidth + 10, 20);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - 5, y - 5);
            ctx.lineTo(x + 5, y - 5);
            ctx.fill();
            ctx.restore();
            ctx.font = '13px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(text, x - textWidth / 2, y - 14);
            ctx.restore();
          }
        });
      });
    },
  };

  const createChart = (chartContext, labels, data, title) => {
    const myPieChart = new Chart(chartContext, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['#e11b1e', '#ca6009', '#cad317', '#45940c'],
            hoverBackgroundColor: ['#9e0c0e', '#854005', '#d0c418', '#15a930'],
            hoverBorderColor: 'rgba(234, 236, 244, 1)',
            hoverOffset: 3,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      },
      plugins: [alwaysShowTooltip],
    });
    setPieChart(myPieChart);
  };

  useEffect(() => {
    if (chartRef) {
      const myPieChart = chartRef.current.getContext('2d');
      let chartToDestroy = Chart.getChart('myPieChart');
      if (chartToDestroy) {
        chartToDestroy.destroy();
      }
      Chart.register(PieController, ArcElement, Legend, Tooltip);
      createChart(myPieChart, labels, data, title);
    }
  }, []);

  return (
    <div style={{ height: height, width: width, margin: 'auto' }}>
      <canvas id='myPieChart' ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
