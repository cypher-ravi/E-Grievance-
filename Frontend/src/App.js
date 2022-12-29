import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import React from 'react';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';


function App() {
  
 
  
// <-- Have to pass in [] here!
  return (
      <>

      <Router>
        <AuthProvider>

            <div className='qura bg-gray-100'>
              <Navbar/>
            </div>
           <Routes>
              <Route exact path='/' element={<PrivateRoute/>} >
                <Route exact path="/" element={<HomePage/>} />
              </Route>
              <Route exact path="/login" element={<Login/>} />
          </Routes>
        </AuthProvider>
      </Router>

      </>
   
  );
}

export default App;
