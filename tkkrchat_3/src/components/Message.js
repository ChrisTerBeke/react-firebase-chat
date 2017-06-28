import React from 'react'

class Message extends React.Component {

  render() {
    console.log('test', this.props)
    return <p>
      { this.props.message.meta &&
        <small>{this.props.message.meta.displayname}<br/></small>
      }
      {this.props.message.payload}
    </p>
  }
}

export default Message
