import React from 'react'
import { useStateValue } from "./StateProvider";
import './CompanyLogo.css'

function CompanyLogo() {
  const [content] = useStateValue();
  const data = content["company_overview"]
  const timeseries = content["alpha_vantage_time_series"]

  const values = Object.values(timeseries);

  const close_value = values.map(item =>{return item['4. close']})
  const end_point = content["param"]
  const url = 'https://raw.githubusercontent.com/marketreef/corporate-logos/master/logos/'
  const final_url = url + end_point.toLowerCase() +'.jpeg'

  return (
    <div className="Company_det">
      <div>
        <img className="comp-logo" src={final_url} alt={content["param"]} />
      </div>
      <div className="Company_name">
        <h2>{data.Name || content["param"]}</h2>
      </div>
      <div className="stock_value">
        <h2>${close_value[99]}</h2>
        <p className="valueChange" style={{color:'green',fontWeight:'bold'}}>${(close_value[99]-close_value[98]).toFixed(2)} ({(((close_value[99]-close_value[98])/close_value[98])*100).toFixed(2)}%)</p>
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