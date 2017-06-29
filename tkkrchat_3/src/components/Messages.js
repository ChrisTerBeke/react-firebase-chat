import React from 'react'

// components
import Compose from './Compose'
import Message from './Message'

// services
import {getMessagesRef} from '../services/firebase'

class Messages extends React.Component {

  state = {
    messages: {}
  }

  componentDidMount () {
    getMessagesRef().on('value', snapshot => {
      this.setState({ messages: snapshot.val() })
    })
  }
  
  render() {
    return <div>
      <Compose />
      {this.state.messages && Object.keys(this.state.messages).map(key => <Message key={key} id={key} message={this.state.messages[key]} /> )}
    </div>
  }
}

export default Messages
