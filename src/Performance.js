import React from 'react'
// import { ProgressBar } from 'react-bootstrap';
import { useStateValue } from "./StateProvider";
import './Performance.css'
import ProgressBar from "@ramonak/react-progress-bar";
// import "bootstrap/dist/css/bootstrap.min.css";

function Performance() {

  const [content] = useStateValue();
  const data = content["company_overview"]
  const timeseries = content["alpha_vantage_time_series"]
  const dates = Object.keys(timeseries);

  const values = Object.values(timeseries);

  const open_value = values.map(item =>{return item['1. open']})
  const close_value = values.map(item =>{return item['4. close']})
  const daily_high = values.map(item =>{return item['2. high']})
  const daily_low = values.map(item =>{return item['3. low']})

  return (
    <div className="Performance">
      <h2>Performance</h2>
      <div className="Progress">
        <div className="row1">
          <div className="txt" style={{textAlign: 'left'}}>
            <p>Today's Low</p>
            <p><b>${daily_low[99]}</b></p>
          </div>
          <div className="bar">
            <ProgressBar width='680px' bgColor="#10b51e" completed={Math.floor(((close_value[99]-daily_low[99])/(daily_high[99]-daily_low[99]))*100)} />
          </div>
          <div className="txt" style={{textAlign: 'right'}}>
            <p>Today's High</p>
            <p><b>${daily_high[99]}</b></p>
          </div>
        </div>
        <div className="row2">
          <div className="txt" style={{textAlign: 'left'}}>
              <p>52WeekLow</p>
              <p><b>${data['52WeekLow']}</b></p>
            </div>
            <div className="bar">
              <ProgressBar width='680px' bgColor="#10b51e" completed={Math.floor(((close_value[99]-data['52WeekLow'])/(data['52WeekHigh']-data['52WeekLow']))*100)} />
            </div>
            <div className="txt" style={{textAlign: 'right'}}>
              <p>52WeekHigh</p>
              <p><b>${data['52WeekHigh']}</b></p>
            </div>
        </div>  
      </div>
      <div className="stats">
        <div className="elem">
          <p>Open Price</p>
          <h3>${open_value[99]}</h3>
        </div>
        <div className="elem">
          <p>Prev. Close</p>
          <h3>${close_value[98]}</h3>
        </div>
        <div className="elem">
          <p>50DayMovingAverage</p>
          <h3>{data['50DayMovingAverage']}</h3>
        </div>
        <div className="elem">
          <p>200DayMovingAverage</p>
          <h3>{data['200DayMovingAverage']}</h3>
        </div>
      </div>
      {/* <ProgressBar active now={45} />; */}
    </div>
  )
}

export default Performance





// document.querySelector(function () { 
//   document.querySelector('[dataToggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
// });  
  
//   document.querySelector(".progress-bar").each(function(){
//     const each_bar_width = document.querySelector(this).attr('aria-valuenow');
//     document.querySelector(this).width(each_bar_width + '%');
//   });


{/* <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-lg-2"></div>
                  <div className="col-md-8 col-lg-8">
                    
              <div className="barWrapper">
              <span className="progressText">HTML5</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" ariaValueNow="50" ariaValueMin="0" ariaValueMax="100" >   
                      <span  className="popOver" dataToggle="tooltip" dataPlacement="top" title="50%"> </span>     
              </div>
              </div>
              </div>
                  <div className="col-md-2 col-lg-2"></div>
                  </div>
              </div>
              </div>
            </section> */}