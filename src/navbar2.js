import React from 'react';
// import useHistory, {Link} from 'use-history'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch } from 'react-instantsearch-hooks'
import {SearchBox , Hits} from './SearchBox.js';
import './navbar2.css';

function Navbar2() {
    let navigate = useNavigate();

    const searchClient = algoliasearch('HYZWDTUGOQ', '44e8df4c0ff10775685512661627068d');

    function Hit({ hit }) {
      return (
        <div className="hit-cont">
          {/* <img src={hit.image} alt={hit.name} /> */}
          <li id={hit.ticker} style={{paddingTop:'0px'}}>{`${hit.ticker}-----------${hit.name}`}</li>
          {/* <p>{hit.ticker}</p> */}
        </div>
      );
    }  
  
  return (
    <div className="navbar_two">
        <div className="logo_prof" onClick={() =>{navigate("/")}}>
            <img src="./images/logo1.png" alt="Company_Logo"></img>
        </div>
        <div className="inner_block_prof">      
            <h2 onClick={() =>{navigate("/")}}>Home</h2>
            <InstantSearch searchClient={searchClient}  indexName="Tickers">
              <div className="search">
                  <SearchBox />
                  <SearchIcon style={{color:"black", fontSize:'40px',paddingRight:'20px', paddingLeft:'10px'}} />
              </div>
              <div className="hit_component">
                  <Hits hitComponent={Hit}/>
              </div>    
            </InstantSearch>
            <h2 onClick={() =>{navigate("/login")}}>Login</h2>
            <h2 onClick={() =>{navigate("/signup")}}>Sign Up</h2>
        </div>
    </div>
  )
}

export default Navbar2


{/* <div className="search_nav">
<SearchIcon style={{color:"black", fontSize:'40px',paddingRight:'20px', paddingLeft:'10px'}} />
<input ariaLabel="Search for a company" type="search" autoComplete="off" spellCheck="false" placeholder="Search for a company" style={{marginBottom: "0px",userSelect:'none'}}/>
</div> */}
