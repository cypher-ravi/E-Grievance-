import React, { Component } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill';

export default class AnswerForm extends Component {
    constructor(props) {
        
        super(props);
        this.state = { inputUrl: "",answer:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    handleChange(content) {
        
       
        this.setState({answer: content});
        console.log(this.state.answer);
      }
    
      handleSubmit = async (event) => {
        // event.preventDefault();
        if(this.state.answer !== ""){
            const config = {
                headers : {"Content-Type": "application/json"},
            }
            const body = {
                question:this.props.post['id'],
                content:this.state.answer,
            }
            await axios.post("http://127.0.0.1:8000/posts/create-answer/",body,config).then((res)=>{
                console.log(res.data)
                // alert("Answer Added Successfully!")
                window.location.href='/';
            }).catch((res)=>{
                console.log(res)
            })
            
        }
       
        console.log('A name was submitted: ' + this.state.answer);

      }

  render() {
    return (
      <div>


                        <div className="modal_question">
                            <h1 className="text-3xl font-bold">{this.props.post['content']}</h1>
                            <p>asked by {""} <span>Username</span> {""} on {""}timestamp</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <div className="modal_answer">
                            <ReactQuill   
                            value={this.state.answer}
                            onChange={this.handleChange}
                            placeholder="Enter your answer........"/>
                            
                        </div>
                        <div className="modal_buttons flex flex-col-reverse mt-10 items-center">
                            <button
                                className="cancel bg-slate-300 mt-3 border-0 outline-0 text-white font-medium p-3 w-1/3 rounded-2xl   cursor-pointer hover:bg-red-700 "
                                onClick={() => this.props.setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="add border-0 outline-0 mt-3 bg-black text-white font-bold p-3 cursor-pointer w-1/2 rounded-2xl hover:bg-slate-400 hover:text-black"
                            >
                                Add Answer
                            </button>
                        </div>

                        </form>
                       
      </div>
    )
  }
}
