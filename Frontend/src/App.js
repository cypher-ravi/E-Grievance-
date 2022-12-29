import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import React from 'react';

import Signup from './components/Signup';

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';


function App() {
  
 
  
// <-- Have to pass in [] here!
  return (
      <>

      <Router>
         <div className='qura bg-gray-100'>
           <Navbar/>
          </div>
     
      <Routes>
        <Route path="/" element={<div className='qura_content flex justify-center mt-12'>
      <Sidebar className="flex"/>
      <Feed/>
      <Widget/>
      </div>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </Router>

      </>
   
  );
}

export default App;
