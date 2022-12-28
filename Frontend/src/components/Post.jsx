import React,{ useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {BiLike,BiDislike} from 'react-icons/bi'
import {RiShareForwardBoxFill} from 'react-icons/ri'
import {VscComment,VscLiveShare} from 'react-icons/vsc'
import {RxDotsHorizontal} from 'react-icons/rx'
import {RxAvatar} from 'react-icons/rx'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import {IoMdClose} from 'react-icons/io'

import 'react-quill/dist/quill.snow.css';
import AnswerForm from './AnswerForm'
import ReactHtmlParser from "html-react-parser"


const Post = ({post}) => {

  const [isModalOpen,setIsModalOpen] = useState(false);
  const Close = (<IoMdClose className='text-2xl font-bold'/>)


  return (
    <div style={{width: '100%',}} className='post flex flex-col p-3 bg-white  mt-3 rounded-md'>
        <div className="post_info flex items-center">
        <FaUserCircle className='text-4xl'/>
        <h1 className='ml-3 cursor-pointer text-sm font-bold hover:underline'>Username</h1>
        <small className='ml-3'>Time Stamp</small>
        </div>
        <div className='post_body flex flex-col'>
            <div className="post_question  flex">
                <p className='mt-3 font-bold mb-3 text-2xl cursor-pointer hover:underline'>{post['content']}</p>
                <button onClick={()=>setIsModalOpen(true)} className='post_btnnanswer ml-auto bg-blue-700 text-white rounded-2x1 py-2 mb-2 px-6 hover:bg-red-900'>Answer</button>
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
            <div className="post_footer_actions flex justify-around border py-3 px-4 rounded-md mr-10 bg-gray-200 text-gray-500 text-3xl ">
            <BiLike className='mr-10 text-3xl hover:text-red-900'/>
            <BiDislike className='hover:text-red-900'/>
            </div>
            <div className='flex justify-around border py-3 px-4 rounded-md mr-10 bg-gray-200 text-gray-500 text-3xl'>
            <RiShareForwardBoxFill className='mr-10 hover:text-red-900'/>
            <VscComment className='hover:text-red-900'/>
            </div>
            <div className="post_footer-left flex  ml-auto  justify-around border py-3 px-4 rounded-md mr-10 bg-gray-200 text-gray-500 text-3xl ">
            <VscLiveShare className='mr-10 hover:text-red-900'/>
            <RxDotsHorizontal className='hover:text-red-900'/>
            </div>
        </div>
        <p style={{
          color:"rgba(0,0,0,0.5)",
          fontSize:"12px",
          fontWeight:"bold",
          margin:"10px 0",
        }}> {post?.answers.length } Answers</p>



        <div style={{
          margin:"5px 0px 0px 0px",
          padding:"5px 0px 0px 20px",
          borderTop:"1px solid lightgrey",
        }}
        className="post__answer"
        >
         




            {post?.answers?.map((_a)=>(
               <div key={_a.id}
               style={{
                 // display:"flex",
                 flexdirection:"row",
                 width:"100%",
                 padding:"10px 5px",
                 borderTop:"1px solid lightgrey",
               }}
               className="post-answer-container"
               >
            
                <div
            style={{
              display:"flex",
              alignItems:"center",
              marginBottom:"10px",
              fontSize:"15px",
              fontWeight:600,
              color:"#888",
              marginTop:"10px",
            }}
            className="post-answered"
            >
              <RxAvatar className='text-5xl'/>
              <div style={{
                margin:"0px 10px",
              }}
            className="post-info"
              >
                <p>Username</p>
                <span>TimeStamp</span>
              </div>
            </div>
            <div className="post-answer text-2xl p-2 ml-2">{ReactHtmlParser(_a?.content)}</div>
           
             
          </div>
            ))}
          






        </div>


      
    </div>
  )
}

export default Post
