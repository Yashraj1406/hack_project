import React from 'react'
import { useStateValue } from "./StateProvider";
import './fundamental.css'

function Fundamental() {
    const [content] = useStateValue();
    const data = content["company_overview"];

    return (
    <div className="fundamental">
        <h2>Fundamentals</h2>
        <div className="inform">
            <table>
                <tr>
                    <td className="column1">
                        <tr className="rows">
                            <td className="left">Market Cap</td>
                            <td className="right">{data.MarketCapitalization}</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>P/B ratio</td>
                            <td className="right">{data.PriceToBookRatio}</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>P/E ratio</td>
                            <td className="right">{data.PERatio}</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>Beta</td>
                            <td className="right">{data.Beta}</td>
                        </tr>
                    </td>
                    <td className="column2">
                        <tr className="rows">
                            <td className='left'>Div. Yield</td>
                            <td className="right">{data.DividendYield}</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>Book Value</td>
                            <td className="right">{data.BookValue}</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>EPS(TTM)</td>
                            <td className="right">{data.EPS}</td>
                        </tr>
                        <tr className="rows">
                            <td className='left'>ROE</td>
                            <td className="right">{data.ReturnOnEquityTTM}</td>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Fundamental