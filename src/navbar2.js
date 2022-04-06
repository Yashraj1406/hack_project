import React from 'react';
// import useHistory, {Link} from 'use-history'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import './navbar2.css';

function Navbar2() {
    let navigate = useNavigate();
  return (
    <div className="navbar_two">
        <div className="logo_prof" onClick={() =>{navigate("/")}}>
            <img src="./images/logo1.png" alt="Company_Logo"></img>
        </div>
        <div className="inner_block_prof">      
            <h2 onClick={() =>{navigate("/profile")}}>Home</h2>
            <div className="search_nav">
                <SearchIcon style={{color:"black", fontSize:'40px',paddingRight:'20px', paddingLeft:'10px'}} />
                <input ariaLabel="Search for a company" type="search" autoComplete="off" spellCheck="false" placeholder="Search for a company" style={{marginBottom: "0px",userSelect:'none'}}/>
            </div>
            <h2 onClick={() =>{navigate("/login")}}>Login</h2>
            <h2 onClick={() =>{navigate("/signup")}}>Sign Up</h2>
        </div>
    </div>
  )
}

export default Navbar2