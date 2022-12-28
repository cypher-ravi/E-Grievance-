import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import Signup from './components/Signup';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  return (
    <>
    <div className='qura bg-gray-200'>
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
