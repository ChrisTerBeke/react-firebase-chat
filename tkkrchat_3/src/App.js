import React, { Component } from 'react'

// components
import Login from './components/Login'
import Messages from './components/Messages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Messages />
      </div>
    );
  }
}

export default App