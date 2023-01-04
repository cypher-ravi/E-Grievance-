import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Solution from './pages/Solution';
import React from 'react';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchFeed from './components/SearchFeed';
import About from './components/About';



function App() {
  
 
  
// <-- Have to pass in [] here!
  return (
      <>

      <Router>
      {/* <GoogleOAuthProvider clientId="248445241744-jm3h0e65l88uoige865o8ft94q44tiqp.apps.googleusercontent.com"> */}
        <AuthProvider>

            <div className='qura bg-gray-200'>
              <Navbar/>
            </div>
           <Routes>
              <Route exact path='/' element={<PrivateRoute/>} >
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/solutions" element={<Solution/>} />
                <Route exact path="/space-solutions" element={<Solution/>} />
                <Route exact path="/search-feed" element={<SearchFeed/>} />
              </Route>
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/about" element={<About/>} />
          </Routes>
        </AuthProvider>
        {/* </GoogleOAuthProvider> */}
      </Router>

      </>
   
  );
}

export default App;
