import React from 'react'

import {FaUserCircle} from 'react-icons/fa'
import {BiLike,BiDislike} from 'react-icons/bi'
import {RiShareForwardBoxFill} from 'react-icons/ri'
import {VscComment} from 'react-icons/vsc'

import 'react-responsive-modal/styles.css';


import 'react-quill/dist/quill.snow.css';
import ReactHtmlParser from "html-react-parser"


// import Like from './Like'


const AnswerPost = ({post}) => {  
  console.log('here is post data ' + post.author.user.username)

  return (
    <div style={{width: '100%',}} className='post flex flex-col p-3 bg-white  mt-3 rounded-md'>
        <div className="post_info flex items-center">
        <FaUserCircle className='text-4xl'/>
        <h1 className='ml-3 cursor-pointer text-sm font-bold hover:underline'>{post.author.user.username}</h1>
        <small className='ml-3'>Time Stamp</small>
        </div>
        <div className='post_body flex flex-col'>
            
            <div className="post_answer">
            <p>{ReactHtmlParser(post.content)}</p>
            </div>
            {post.image !== "" && <img className='object-contain w-full border rounded-md cursor-pointer' src={post.image} alt="" /> }
        </div>
        
        <div className="post_footer flex items-center mt-3 p-2">
            <div className="post_footer_actions flex justify-around border py-3 px-4 rounded-3xl mr-10 bg-gray-200 text-gray-500 text-3xl ">
           <BiLike className='mr-10 text-3xl hover:text-red-900'/>
           {/* <Like/> */}
            
            
            <BiDislike className='hover:text-red-900'/>
            </div>
            <div className='flex justify-around border py-3 px-4 rounded-3xl mr-10 bg-gray-200 text-gray-500 text-3xl'>
            <RiShareForwardBoxFill className='mr-10 hover:text-red-900'/>
            <VscComment className='hover:text-red-900'/>
            </div>
           
        </div>
    </div>
  )
}

export default AnswerPost
