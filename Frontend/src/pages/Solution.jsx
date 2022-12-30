import React from 'react'
import Sidebar from '../components/Sidebar';
import AnswerFeed from '../components/AnswerFeed';
import Widget from '../components/Widget';

const Solution = () => {
  return (
      <div className='qura_content flex justify-center mt-12'>
      <Sidebar className="flex"/>
      <AnswerFeed/>
      <Widget/>
      </div>
   
  )
}

export default Solution
