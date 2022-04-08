import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    let navigate = useNavigate();
    return (
        <div id="wrapper" style={{margin:'50px',alignItems: 'center',justifyContent: 'center'}}>
            <img width='300' height='300' src="https://i.imgur.com/qIufhof.png" alt="404"/>
            <div id="info">
                <h3>This page could not be found or GET request did not return</h3>
                <button onClick={() =>{navigate("/")}} style={{
                    marginTop:'20px',
                    padding:'10px',
                    backgroundColor:'#10b51e',
                    color:'white',
                    fontSize:'1.2rem',
                    borderRadius:'5px',
                    border:'none',
                    cursor:'pointer'}}>
                    Return to the homepage
                </button>
            </div>
        </div >
    )
}

export default PageNotFound