import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import PageNotFound from './pageNotFound';
import Profile from './profile';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';
 
function App() {
  return (
    <div className="app">
    {/* <Router> */}
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes> 
    {/* </Router> */}
    </div>
  );
}

export default App;
