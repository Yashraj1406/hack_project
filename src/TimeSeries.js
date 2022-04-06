import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './TimeSeries.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function TimeSeries() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        type: "line",
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        borderColor: "#10b51e"
      }
    ]
  };
  
  return (
    <div className="timeseries">
      {/* <h2>TimeSeries</h2> */}
      <Line
        options={options}  
        data={data}
      />
    </div>
  )
}

export default TimeSeries