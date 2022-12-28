import React,{ useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {BiLike,BiDislike} from 'react-icons/bi'
import {RiShareForwardBoxFill} from 'react-icons/ri'
import {VscComment,VscLiveShare} from 'react-icons/vsc'
import {RxDotsHorizontal} from 'react-icons/rx'

import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import {IoMdClose} from 'react-icons/io'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Post = () => {

  const [isModalOpen,setIsModalOpen] = useState(false);
  const Close = (<IoMdClose className='text-2xl font-bold'/>)


  return (
    <div className='post flex flex-col p-3 bg-white border border-gray-500 mt-3 rounded-md'>
        <div className="post_info flex items-center">
        <FaUserCircle className='text-4xl'/>
        <h1 className='ml-3 cursor-pointer text-sm font-bold hover:underline'>Username</h1>
        <small className='ml-3'>Time Stamp</small>
        </div>
        <div className='post_body flex flex-col'>
            <div className="post_question  flex">
                <p className='mt-3 font-bold mb-3 cursor-pointer hover:underline'>Questions?</p>
                <button onClick={()=>setIsModalOpen(true)} className='post_btnnanswer ml-auto bg-blue-700 text-white rounded-2xl py-2 px-6 hover:bg-red-900'>Answer</button>
                <Modal open={isModalOpen} closeIcon={Close} onClose={()=>setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false} >
                  <div className="modal_question ">
                    <h1 className="font-extrabold text-red-600 text-3xl" >This is the test Question?</h1>
                    <p>asked by {""} <span className='font-bold'>Username</span> {""} on {""}timestamp</p>
                  </div>
                  <div className="modal_answer mt-2">
                    <ReactQuill placeholder="Enter your answer........"/>
                  </div>  
                  <div className="modal_button mt-12">
                  <button className="cancel mr-24 bg-slate-300 mt-3 border-0 outline-0 text-white font-medium p-3 w-1/3 rounded-2xl   cursor-pointer hover:bg-red-700 " onClick={()=>setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="subbmit" className="add border-0 outline-0 mt-3 bg-black text-white font-bold p-3 cursor-pointer w-1/2 rounded-2xl hover:bg-slate-400 hover:text-black" >
                  Add Answer
                </button>
                  </div>
                </Modal>
            </div>
            <div className="post_answer">
            <p></p>
            </div>
            <img className='object-contain w-full border rounded-md cursor-pointer' src="https://thumbs.dreamstime.com/b/big-male-elephant-going-toward-photographer-kruger-national-park-south-africa-big-male-elephant-african-landscape-125455879.jpg" alt="" />
        </div>
        
        <div className="Post_fotter flex items-center mt-3 p-2">
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


      
    </div>
  )
}

export default Post
