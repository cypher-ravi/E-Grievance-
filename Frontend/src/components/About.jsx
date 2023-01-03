import React from 'react';

import { RxAvatar } from "react-icons/rx";

const About = (props) => {
  return (
    <div>

   <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>About Our Website</h5>
  
   <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Welcome to our website! We provide a platform for users to ask questions and get answers using artificial intelligence. In addition to asking and answering questions.</p>
   <h5>Users can also:</h5>
        <p  class="mb-4 mt-2 text-sm text-black-500 dark:text-gray-400">- Login to their account.</p>
        <p  class="mb-4 text-sm text-black-500 dark:text-gray-400">- Comment on questions and answers.</p>
        <p  class="mb-4 text-sm text-black-500 dark:text-gray-400">- Like questions and answers.</p>
        <p  class="mb-4 text-sm text-black-500 dark:text-gray-400">- View answers organized by category.</p>


    </div>
  );
};

export default About;
