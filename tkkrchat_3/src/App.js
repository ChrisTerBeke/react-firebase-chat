import React, { Component } from 'react'

// services
import {isAuthenticated} from './services/firebase'

// components
import Login from './components/Login'
import Messages from './components/Messages'

// style
import './App.css'

class App extends Component {

  state = {
    isAuthenticated: isAuthenticated()
  }

  setAuthenticated (state) {
    this.setState({
      isAuthenticated: state
    })
  }

  render() {
    return (
      <div className="App">
        { !this.state.isAuthenticated &&
          <h1 style={{
            textAlign: 'center'
          }}>TkkrChat</h1>
        }
        <Login isAuthenticated={this.state.isAuthenticated} setAuthenticated={this.setAuthenticated.bind(this)} />
        { this.state.isAuthenticated && <Messages /> }
      </div>
    );
  }
}

export default App