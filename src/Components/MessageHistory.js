import React from 'react'
import '../App.css';

const MessageHistory = (props) =>{
    return (
            <ul>
            <li class="clearfix">
                <div class="message-data align-right">
                <span class="message-data-time">{props.messages.time}</span> &nbsp; &nbsp;
                <span class="message-data-name">{props.messages.sur.name}</span>
                <i class="fa fa-circle me"></i>
                </div>
                <div class="message other-message float-right">
                {props.messages.text}
                </div>
            </li>
            </ul>
    )
}

export default MessageHistory
