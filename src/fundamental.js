import React from 'react'
import './fundamental.css'

function Fundamental() {
  return (
    <div className="fundamental">
        <h2>Fundamentals</h2>
        <div className="inform">
            <table>
                <tr>
                    <td className="column1">
                        <tr className="rows">
                            <td className="left">Market Cap</td>
                            <td className="right">$1.89T</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>P/B ratio</td>
                            <td className="right">7.5</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>P/E ratio</td>
                            <td className="right">24.9</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>Enterprise</td>
                            <td className="right">$1.9T</td>
                        </tr>
                    </td>
                    <td className="column2">
                        <tr className="rows">
                            <td className='left'>Div. Yield</td>
                            <td className="right">0.00%</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>Book Value</td>
                            <td className="right">380.70</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>EPS(TTM)</td>
                            <td className="right">113.88</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>ROE</td>
                            <td className="right">31.60%</td>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Fundamental