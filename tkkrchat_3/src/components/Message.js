import React from 'react'

// services
import {deleteMessage} from '../services/firebase'

class Message extends React.Component {

  deleteMessage () {
    deleteMessage(this.props.id)
  }

  render() {
    return <div className="message">
      <div className="message-content">{this.props.message.payload}</div>
      <a onClick={this.deleteMessage.bind(this)} className="message-delete">x</a>
      <span className="message-footer">Sent by <b>{this.props.message.meta.displayname}</b> at {new Date(this.props.message.meta.timestamp).toLocaleTimeString()}</span>
    </div>
  }
}

export default Message
