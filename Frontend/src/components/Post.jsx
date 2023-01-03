import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import {BiLike,BiDislike} from 'react-icons/bi'
import {RiShareForwardBoxFill} from 'react-icons/ri'


import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import {IoMdClose} from 'react-icons/io'

import 'react-quill/dist/quill.snow.css';
import AnswerForm from './AnswerForm'
import SingleAccordion from './SingleAccordion'
import CommentButton from './CommentButton'


import Like from './Like'
import LastSeen from './LastSeen'


const Post = ({post}) => {

  const [isModalOpen,setIsModalOpen] = useState(false);
  const Close = (<IoMdClose className='text-2xl font-bold'/>)

  let navigate = useNavigate()
  const navigateToSolution = () => {
    navigate('/solutions',{state: {value : post['id'],navigateToSpace:false}})

  }
  console.log('here is post data ' + post.author.user.username)

  return (
    <div style={{width: '100%',}} className='post flex flex-col p-3 bg-white  mt-3 rounded-md'>
        <div className="post_info flex items-center">
        <FaUserCircle className='text-4xl'/>
        <h1 className='ml-3 cursor-pointer text-sm font-bold hover:underline'>{post.author.user.username}</h1>
        <small className='ml-3'><LastSeen date={post?.created}/></small>
        </div>
        <div className='post_body flex flex-col'>
            <div className="post_question  flex">
                <p className='mt-3 font-bold mb-3 text-2xl cursor-pointer hover:underline'>{post['content']}</p>
                <button onClick={()=>setIsModalOpen(true)} className='post_btn-answer ml-auto bg-blue-900 text-white rounded-full py-2 mb-2 round px-6 hover:bg-blue-700'>Answer</button>
                <Modal open={isModalOpen} closeIcon={Close} onClose={()=>setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false} >
                  

                <AnswerForm setIsModalOpen={false} post={post}/>

                </Modal>
            </div>
            <div className="post_answer">
            <p></p>
            </div>
            {post.image !== "" && <img className='object-contain w-full border rounded-md cursor-pointer' src={post.image} alt="" /> }
        </div>
        
        <div className="post_footer flex items-center mt-3 p-2">
            <div className="post_footer_actions flex justify-around border rounded-3xl mr-5 bg-gray-200 text-gray-500 text-2xl ">
              <Like post={post} likes={post.likes}/>
            
            </div>
            <div className='flex justify-around border py-1 px-4 rounded-3xl mr-10 bg-gray-200 text-gray-500 text-2xl'>
            {/* <small className="ml-4 mt-1 mb-2 text-2xl"><b>{post.comments_count}</b></small>  */}
            <RiShareForwardBoxFill className='mr-10 hover:text-red-900 mt-1 text-2xl'/>
            <CommentButton commentsCount={post.comments_count} post={post} />
            
            </div>
            <div className="post_footer-left flex ml-auto justify-around text-gray-500 text-3xl ">
            {/* <VscLiveShare className='mr-10 hover:text-red-900'/>
            <RxDotsHorizontal className='hover:text-red-900'/> */}
            <button type="button" onClick={navigateToSolution} className="inline-flex items-center px-5 py-4 text-sm font-medium text-center text-white bg-blue-900 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              All Answers
              <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {post?.answers.length }
              </span>
              <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            </div>
        </div>
    

        <div style={{
          margin:"5px 0px 0px 0px",
          padding:"5px 0px 0px 20px",
          borderTop:"1px solid lightgrey",
        }}
        className="post__answer"
        >
         
            {post?.answers?.map((_a,index)=>(
              <SingleAccordion key={_a.id} id={index + 1} content={_a?.content}/>
              ))}
        </div>


      
    </div>
  )
}

export default Post
