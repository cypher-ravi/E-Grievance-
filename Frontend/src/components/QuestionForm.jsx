import React, { Component,useContext } from "react";
import axios from 'axios';

import AuthContext from '../context/AuthContext'



export default class QuestionForm extends Component {
    // static contextType = AuthContext;
    constructor(props) {
        
        super(props);
        
        this.state = { inputUrl: "",question:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    handleChange(event) {
        console.log(this.state.question)
        this.setState({question: event.target.value});
      }
    
      handleSubmit = async (event) => {
        event.preventDefault();
        let csrfToken = "{% csrf_token %}";
        console.log(this.context.authTokens)
        if(this.state.question !== ""){
           
            const config = {
                headers : {"Access-Control-Allow-Origin" : "*","Content-Type": "application/json","Authorization":"Bearer " + String(this.context.authTokens.access)},
            }
            const body = {
                content:this.state.question,
                user:this.context.user.username,
            }
            await axios.post("http://127.0.0.1:8000/posts/create-post/",body,config).then((res)=>{
                console.log(res.data)
                // alert("Question Added Successfully!")
                window.location.href = '/';
            }).catch((res)=>{
                console.log(res)
            })
            
        }
       
        console.log('A name was submitted: ' + this.state.question);

      }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <div className="modal_field flex flex-col mt-8 flex-1">


                    <input
                        className="text flex-1 ml-1 rounded-none outline-0 border-b-2 border-slate-500"
                        type="text"
                        placeholder="Start your Question with how and etc."
                        value={this.state.question}
                        onChange={this.handleChange}
                    />
                    <div className="flex flex-col flex-1 pt-3">
                        <input
                            value={this.state.inputUrl}
                            onChange={(e) => this.state.inputUrl(e.target.value)}
                            className="flex-1 ml-1 rounded-none outline-1 outline-none outline-slate-600 p-2"
                            type="text"
                            placeholder="optional:include a link that give the context"
                        />
                        {this.state.inputUrl !== "" && (
                            <img
                                className=" p-3 h-80 object-contain"
                                src={this.state.inputUrl}
                                alt="displayimage"
                            />
                        )}
                    </div>
                </div>
                <div className="modal_buttons flex flex-col-reverse mt-3 items-center">
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
                        Add Question
                    </button>
                </div>
                </form>
            </>
        );
    }
}


QuestionForm.contextType = AuthContext;