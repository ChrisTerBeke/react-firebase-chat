import React from 'react'

// services
import {sendMessage} from '../services/firebase'

class Compose extends React.Component {

  state = {
    message: ''
  }

  changeMessage (e) {
    this.setState({ message: e.target.value })
  }

  sendMessage () {
    sendMessage(this.state.message).then(response => {
      this.refs.messageInput.value = '' // reset the field value
    })
  }

  render() {
    return <div>
      <input type="text" ref="messageInput" onChange={this.changeMessage.bind(this)} />
      <a onClick={this.sendMessage.bind(this)}>Send</a>
    </div>
  }
}

export default Compose
