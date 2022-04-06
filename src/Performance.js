import React from 'react'
// import { ProgressBar } from 'react-bootstrap';
import './Performance.css'
import ProgressBar from "@ramonak/react-progress-bar";
// import "bootstrap/dist/css/bootstrap.min.css";

function Performance() {

  return (
    <div className="Performance">
      <h2>Performance</h2>
      <div className="Progress">
        <div className="row1">
          <div className="txt" style={{textAlign: 'left'}}>
            <p>Today's Low</p>
            <p><b>$2,806.21</b></p>
          </div>
          <div className="bar">
            <ProgressBar width='680px' bgColor="#10b51e" completed={Math.floor((2806.21/2874.24)*100)} />
          </div>
          <div className="txt" style={{textAlign: 'right'}}>
            <p>Today's High</p>
            <p><b>$2,874.24</b></p>
          </div>
        </div>
        <div className="row2">
          <div className="txt" style={{textAlign: 'left'}}>
              <p>Monthly Low</p>
              <p><b>$2,806.21</b></p>
            </div>
            <div className="bar">
              <ProgressBar width='680px' bgColor="#10b51e" completed={Math.floor((2806.21/2874.24)*100)} />
            </div>
            <div className="txt" style={{textAlign: 'right'}}>
              <p>Monthly High</p>
              <p><b>$2,874.24</b></p>
            </div>
        </div>  
      </div>
      <div className="stats">
        <div className="elem">
          <p>Open Price</p>
          <h3>$2,807.17</h3>
        </div>
        <div className="elem">
          <p>Prev. Close</p>
          <h3>$2,803.01</h3>
        </div>
        <div className="elem">
          <p>Volume</p>
          <h3>1,298,542</h3>
        </div>
        <div className="elem">
          <p>Volume</p>
          <h3>1,680,433</h3>
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