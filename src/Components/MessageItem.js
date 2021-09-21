import React from 'react'
import MessageHistory from './MessageHistory'
import '../App.css';

function MessageItem({messages}) {
    return (
        <div>
                    {messages.map((messages)=>
                    <MessageHistory messages={messages} key={messages.id}/>
                    )}
        </div>
    )
}

export default MessageItem
