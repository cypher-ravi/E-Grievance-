import React, { useState,useContext } from 'react';

import axios from 'axios';
import {VscComment} from 'react-icons/vsc';
import 'react-responsive-modal/styles.css';
import {IoMdClose} from 'react-icons/io';
import Modal from 'react-responsive-modal';
import { RxAvatar } from "react-icons/rx";
import { MdOutlineLanguage, MdKeyboardArrowDown } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import AuthContext from '../context/AuthContext';

const CommentButton = (props) => {
  const {user,authTokens} = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(props.commentsCount);
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const Close = (<IoMdClose className='text-2xl font-bold'/>)
  axios.interceptors.request.use(
    config => {
      config.headers.authorization = 'Bearer ' + authTokens.access;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  )

  const openModal = () => {
    axios.get(`http://127.0.0.1:8000/posts/list-all-comments-via-post/${props.post['id']}/` )
      .then((res) => {
        console.log(res);
        setAllComments(res['data']['results'])
      })
      .catch((err) => {
        console.error(err);
      });
    setIsModalOpen(true);






  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment_body = {
        body:comment,
        post:props.post['id'],
        user:user.username

    }
    
    axios.post('http://127.0.0.1:8000/posts/comment-post/',comment_body )
      .then((res) => {
        console.log(res);
        setCommentCount(res['data']['comment_count'])
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(event.target.comment_value.value)

    setIsModalOpen(false);
  };

  return (
    <>
        <small><b>{commentCount}</b></small> 
      <button onClick={openModal}>
   
        <VscComment className='text-3xl ml-2 mr-4 mt-1 hover:text-red-900'/>
      </button>
      <Modal 
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
        >
          <div className="modal_title flex items-center mb-1 border-b-2 border-slate-400">
            <h1 className="text-xl font-medium mr-8 ">
              Add Comment
            </h1>

          </div>
          <div className="modal_info flex items-center mt-8">
            <RxAvatar className="avatar text-3xl" />
            
            <div className="modal_scope flex items-center text-slate-400 p-1 ml-3 bg-white rounded-3xl cursor-pointer">
              <BsPeopleFill className="text-3xl" />
              <p className="ml-3 text-lg text-slate-400">Public</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="modal_field flex flex-col mt-8 flex-1">
          <form onSubmit={handleSubmit}>
          
            <textarea name="comment_value" className="w-full rounded-lg" type="text" rows="3" cols="10" value={comment} onChange={handleChange} />
        
          <br />
          <button
                                type="submit"
                                className="inline-flex add outline-0 mt-3 bg-black text-white p-3  cursor-pointer rounded-3xl hover:bg-slate-400 hover:text-black items-center"
                            >
                                Add Comment
                            </button>
        </form>

        
<div className="w-full mt-2 p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">All Comments</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {allComments.map(({id,body,user})=>( <li key={id} className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Neil image"/>
                    </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-large text-gray-900 truncate dark:text-white">
                        {user['user']['username']}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {body}

                    </p>
                </div>
            </div>
            </li>))}
        </ul>
   </div>
</div>

         
          </div>
        </Modal>
      
     
        </>
  );
};

export default CommentButton;
