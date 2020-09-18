import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./Chat.css";
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Karun</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toString()}
            {/**message.timestamp?.toDate() */}
          </span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Karun</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toString()}
            {/**message.timestamp?.toDate() */}
          </span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Karun</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toString()}
            {/**message.timestamp?.toDate() */}
          </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
