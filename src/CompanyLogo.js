import React from 'react'
import './CompanyLogo.css'

function CompanyLogo() {
  return (
    <div className="Company_det">
      <div>
        <img className="comp-logo" src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png" alt="Google" />
      </div>
      <div className="Company_name">
        <h2>Alphabet Inc. - Class A Shares</h2>
      </div>
      <div className="stock_value">
        <h2> $ 2,445.43</h2>
        <p className="valueChange" style={{color:'green',fontWeight:'bold'}}>+$56.42 (2.0%)</p>
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