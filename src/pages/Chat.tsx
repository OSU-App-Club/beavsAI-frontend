import React from 'react';
import g10 from "../assets/g10.svg";
import profile from"../assets/profile-logo-image.jpeg";
import '../Chat.css';
export default function Chat(){
    return (
        
    <div className="side-bar">

    <div className="header-title"> 
        <div className="intro-text">BeavsAI</div>
        <div className="intro-image"><img src={g10}/></div>
    </div>
       
    <div className="chat-box-container">
       <div className="side-box-1">Recent Request</div>
       <div className="side-box-2">Recent Request</div>
       <div className="side-box-3">Recent Request</div>
       <div className="side-box-4">Recent Request</div>
       <div className="side-box-5">Recent Request</div>
       <div className="side-box-6">Recent Request</div>
    </div>
    

    <div className="profile-container">
        <div className="profile-icon"><img src={profile}/></div>
        <h1 className="username">User</h1>
    </div>





    </div>
        
    )
}