import React from 'react'
import './Chat.css'
import { IconButton, Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
export const Chat = () => {
    return (
        <div className="chat">
          <div className="chat_header">
            <Avatar/>
            
            <div className="chat_headerInfo">
              <h3>Room name</h3>  
              <p>Last seen at . . .</p>
            </div>
            <div className="chat_headerRight">
              <IconButton>
                <ChatIcon/>
              </IconButton>

              <IconButton>
                <AttachFileIcon/>
              </IconButton>

              <IconButton>
                <MoreVertIcon/>
              </IconButton>

              
            </div>
          </div>
          <div className="chat_body">

            <p className="chat_message">
              <span className="chat_name">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>

            <p className="chat_message chat-reciever">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>

            <p className="chat_message">
              <span className="chat_name">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>

            <p className="chat_message">
              <span className="chat_name">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>
            <p className="chat_message chat-reciever">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>
            <p className="chat_message chat-reciever">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>
            <p className="chat_message">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>
            <p className="chat_message chat-reciever">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>
            <p className="chat_message chat-reciever">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p><p className="chat_message chat-reciever">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p><p className="chat_message chat-reciever">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p><p className="chat_message">
              <span className="chat_name ">Ayoub</span>
              
              
              This is a messange
              <span className="chat_timestamp">{  new Date().toUTCString()   }</span>
              
            </p>

          </div>
          <div className="chat_footer">
            <InsertEmoticonIcon/>
            <form>
              <input type="text" className="chat_footerInput" placeholder="Type a message"/>
              
             <SendIcon style={{color:"grey"}}/>
            </form>
            <MicIcon/>

          </div>
          
        </div>
    )
}
