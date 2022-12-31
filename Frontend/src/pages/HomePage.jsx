import React from 'react'
import Sidebar from '../components/Sidebar';
import QuestionFeed from '../components/QuestionFeed';
import Widget from '../components/Widget';

const HomePage = () => {
  return (
      <div className='qura_content bg-gray-100 flex justify-center'>
      <Sidebar className="flex"/>
      <QuestionFeed/>
      <Widget/>
      </div>
   
  )
}

export default HomePage
