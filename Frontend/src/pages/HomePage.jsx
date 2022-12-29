import React from 'react'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';

const HomePage = () => {
  return (
      <div className='qura_content flex justify-center mt-12'>
      <Sidebar className="flex"/>
      <Feed/>
      <Widget/>
      </div>
   
  )
}

export default HomePage
