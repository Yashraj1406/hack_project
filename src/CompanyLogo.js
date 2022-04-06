import React from 'react'
import Content from './Content.js'
import { data } from './Content.js'
import './CompanyLogo.css'

function CompanyLogo() {
  const { alpha_vantage,tweets } = Content;

  const values = Object.values(alpha_vantage);

  const open_value = values.map(item =>{return item['1. open']})
  const close_value = values.map(item =>{return item['4. close']})
  const daily_high = values.map(item =>{return item['2. high']})
  const daily_low = values.map(item =>{return item['3. low']})
  const daily_volume = values.map(item =>{return item['5. volume']})


  return (
    <div className="Company_det">
      <div>
        <img className="comp-logo" src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png" alt="Google" />
      </div>
      <div className="Company_name">
        <h2>{data.Name}</h2>
      </div>
      <div className="stock_value">
        <h2>${close_value[99]}</h2>
        <p className="valueChange" style={{color:'green',fontWeight:'bold'}}>${(close_value[99]-close_value[98])} ({((close_value[99]-close_value[98])/close_value[98])*100}%)</p>
      </div>

    </div>
  )
}

export default CompanyLogo

{/* <div className="comp_logo">
                <img src="https://e7.pngegg.com/pngimages/421/506/png-clipart-google-logo-google-home-alphabet-inc-google-company-trademark.png" alt="Google" />
              </div>
              <div>
                <h2>Alphabet Inc. - Class A Shares</h2>
                <div className="usph14Sector fs12 valign-wrapper vspace-between clrSubText" style="user-select: auto;">
                  Technology
                </div>
                <div className="stock_value">
                  <h2>$2,445.43</h2>
                  <p className="valueChange">+$56.42 (2.0%)</p>
                  <p>1D</p>
                </div>
              </div> */}