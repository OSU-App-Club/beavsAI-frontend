import React from 'react';
import g10 from "../assets/g10.svg";
import profile from"../assets/profile-logo-image.jpeg";
import './Chat.css';
import { Link } from 'react-router-dom';
import ChatMessage from '../components/ChatMessage';
export default function Chat(){

    return (
    <> 
        <div className='page-container'>
            <div className="side-bar">

                <div className="header-title"> 
                    <h1 className="intro-text">BeavsAI</h1>
                    <div className="intro-image">
                        <img src={g10}/>
                    </div>
                </div>
                
                <div className="chat-box-container">
                    <h2 className="side-box-1">Recent Request</h2>
                    <h2 className="side-box-2">Recent Request</h2>
                    <h2 className="side-box-3">Recent Request</h2>
                    <h2 className="side-box-4">Recent Request</h2>
                    <h2 className="side-box-5">Recent Request</h2>
                    <h2 className="side-box-6">Recent Request</h2>
                </div>
                

                <div className="profile-container">
                    <div className="profile-icon"><img src={profile}/></div>
                    <h1 className="username">User</h1>
                </div>

            </div>

            <div className='message-container'>
                <ChatMessage message="This is an example message!" sentBy="User"/>
                <ChatMessage message="Hello" sentBy="BeavsAI"/>
                <ChatMessage message="Hello" sentBy="User"/>
                <div className='send-message-container'>
                    <input type='text' placeholder='Enter your message here..' className='message-input'/>
                    <button className='send-message-button'>Send</button>
                </div>
                <Link to='/' className='btn'>Back</Link>
            </div>
        </div>
    </>   
        
    )
}