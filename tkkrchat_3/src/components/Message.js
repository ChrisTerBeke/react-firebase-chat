import React from 'react'

// services
import {deleteMessage} from '../services/firebase'

class Message extends React.Component {

  deleteMessage () {
    deleteMessage(this.props.id)
  }

  render() {
    return <p>
      { this.props.message.meta &&
        <small>{this.props.message.meta.displayname}<br/></small>
      }
      {this.props.message.payload}
      <a onClick={this.deleteMessage.bind(this)} style={{
        color: 'red',
        padding: '.5em'
      }}>x</a>
    </p>
  }
}

export default Message
