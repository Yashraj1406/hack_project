import React from 'react'
import { useStateValue } from "./StateProvider";
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

  const [{ param,alpha_vantage_time_series,datas, tweets }] = useStateValue();
  const dates = Object.keys(alpha_vantage_time_series);
  const values = Object.values(alpha_vantage_time_series);

  const close_value = values.map(item =>{return item['4. close']})
  // const value = Object.values(alpha_vantage.dates['4. close'])
  // const close_value = Object.values(value['4. close'])
  // const [close_value] = dates_data.close;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
  };

  const data = {
    labels: dates,
    datasets: [
      {
        type: "line",
        label: "Stock_data",
        data: close_value,
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