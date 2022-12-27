import React from 'react'
import Widgetoptions from './Widgetoptions'

const Widget = () => {
  return (
    <div className='widget basis-1/5 '>
        <div className="widget-header">
            <h1 className='pl-12 text-lg font-extrabold'>Spaces to follow</h1>
        </div>
      <Widgetoptions />
    </div>
  )
}

export default Widget
