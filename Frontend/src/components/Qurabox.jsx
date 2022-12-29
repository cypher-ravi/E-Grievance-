import React,{useContext} from 'react'
import {RxAvatar} from 'react-icons/rx'

import AuthContext from "../context/AuthContext";
const Qurabox = () => {
  let {user} = useContext(AuthContext)
  return (
    <div style={ {width:"100%"}} className='qurabox p-3 flex flex-col bg-white rounded-md  mt-3'>
      <div className="qura_info flex items-center">
      <RxAvatar className='text-3xl text-gray-500'/>
      <h1 className='text-gray-500 text-sm ml-3'>{user.username}</h1>
      </div>
      <div className="qura_box flex mt-2">
        <p className='text-gray-500 font-bold text-lg'>What is your complaint?</p>
      </div>
    </div>
  )
}

export default Qurabox
