import { useEffect, useRef, useState } from 'react';
import {
  ArcElement,
  Chart,
  PieController,
  Legend,
  Tooltip,
} from 'chart.js';

const PieChart = ({
  height,
  width,
  title,
  labels,
  data,
}) => {
  const chartRef = useRef(null);
  const [pieChart, setPieChart] = useState(null);

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
        tooltips: {
          backgroundColor: 'rgb(255,255,255)',
          bodyFontColor: '#858796',
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      },
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
    });
    setPieChart(myPieChart);
  };

  useEffect(() => {
    if (chartRef) {
      const myPieChart = chartRef.current.getContext('2d');
      let chartToDestroy = Chart.getChart('myPieChart');
      if (chartToDestroy){
        chartToDestroy.destroy();
      }
      Chart.register(PieController, ArcElement, Legend, Tooltip);
      createChart(myPieChart, labels, data, title);
    }
  }, []);

  return (
    <div style={{height: height, width:width, margin:'auto'}}>
      <canvas id='myPieChart' ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
