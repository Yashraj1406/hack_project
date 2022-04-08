import React from 'react'
import './SearchSpace.css'
import {SearchBox , Hits} from './SearchBox.js';
import { useStateValue } from "./StateProvider";
import { useNavigate } from 'react-router-dom';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch } from 'react-instantsearch-hooks'


function SearchSpace() {
  const navigate = useNavigate();

  // const [{},dispatch] = useStateValue();
  // const [content] = useStateValue();

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
    <div className="search-space">

       <div className="left-side">
            <div className="quote">
                <h1>Earning Money With Sentiments </h1>
                <h2>Helping out with stocks</h2>
            </div>
            <InstantSearch searchClient={searchClient}  indexName="Tickers">
              <div className="search">
                  <SearchBox />
              </div>
              <div className="hit_component">
                  <Hits hitComponent={Hit}/>
              </div>    
            </InstantSearch>
              {/* <input ariaLabel="Search for a company" type="search" autoComplete="off" spellCheck="false" placeholder="Search for a company" style={{marginBottom: "0px",userSelect:'none'}}/> */}
          </div>
       </div>

  )
}

export default SearchSpace