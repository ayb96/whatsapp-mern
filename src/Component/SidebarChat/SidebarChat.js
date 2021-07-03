import React from 'react'
import './SidebarChat.css'
import { IconButton, Avatar } from '@material-ui/core';
export const SidebarChat = () => {
    return (
        
        <div className="sidebarChat">
            <Avatar src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"/>
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
            
        
    )
}
