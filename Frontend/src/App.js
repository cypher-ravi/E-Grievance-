import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import React from 'react';


function App() {
  
 
  
// <-- Have to pass in [] here!
  return (
    <div className='qura bg-gray-100'>
      <Navbar/>
      <div className='qura_content flex justify-center mt-12'>
      
      <Sidebar className="flex"/>
      
      <Feed/>
      <Widget/>
      </div>
    </div>
      <Signup/>

      
   </>
  );
}

export default App;
