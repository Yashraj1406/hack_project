import React from 'react'
import Content from './Content.js'
import { data } from './Content.js'
// import { ProgressBar } from 'react-bootstrap';
import './Performance.css'
import ProgressBar from "@ramonak/react-progress-bar";
// import "bootstrap/dist/css/bootstrap.min.css";

function Performance() {

  const { alpha_vantage,tweets } = Content;
  const dates = Object.keys(alpha_vantage);

  var today = new Date();
  var month = (today.getMonth()+1).toString()
  var day =  (today.getDate()-1).toString()
  var date = today.getFullYear()+'-'+month.padStart(2,'0')+'-'+day.padStart(2,'0');

  const values = Object.values(alpha_vantage);

  const open_value = values.map(item =>{return item['1. open']})
  const close_value = values.map(item =>{return item['4. close']})
  const daily_high = values.map(item =>{return item['2. high']})
  const daily_low = values.map(item =>{return item['3. low']})
  const daily_volume = values.map(item =>{return item['5. volume']})

  console.log(daily_high);

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
            <ProgressBar width='680px' bgColor="#10b51e" completed={Math.floor((2806.21/2874.24)*100)} />
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
              <ProgressBar width='680px' bgColor="#10b51e" completed={Math.floor((2806.21/2874.24)*100)} />
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