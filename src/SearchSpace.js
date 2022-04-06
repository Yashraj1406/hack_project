import React from 'react'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import './SearchSpace.css'

function SearchSpace() {
  return (
    <div className="search-space">

       <div className="left-side">
            <div className="quote">
                <h1>The Kickass Trading Company</h1>
                <h2>Helping out with stocks</h2>
            </div>
            <div className="search">
                <SearchIcon style={{color:"black", fontSize:'40px',paddingRight:'20px', paddingLeft:'10px'}} />
                <input ariaLabel="Search for a company" type="search" autoComplete="off" spellCheck="false" placeholder="Search for a company" style={{marginBottom: "0px",userSelect:'none'}}/>
            </div>
       </div>

        {/* <div className="img">
            <img src="./images/img.jpg" alt="Company_Logo"/>
        </div> */}
    </div>
  )
}

export default SearchSpace