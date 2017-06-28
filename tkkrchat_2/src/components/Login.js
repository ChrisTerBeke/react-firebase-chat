import React from 'react'

// services
import {loginWithGitHub, isAuthenticated, signOut} from '../services/firebase'

class Login extends React.Component {

  state = {
    isAuthenticated: isAuthenticated()
  }

  render() {
    return <div>
      
      { !this.state.isAuthenticated && // only show login button when we're not logged in yet
        <a onClick={this.login.bind(this)}>Login with GitHub</a>
      }

      { this.state.isAuthenticated &&
        <a onClick={this.signOut.bind(this)}>Logout</a>
      }

    </div>
  }

  login () {
    loginWithGitHub().then(response => {
      this.setAuthenticated(true)
    }).catch(err => {
      this.setAuthenticated(false)
    })
  }

  signOut () {
    signOut().then(() => {
      this.setAuthenticated(false)
    })
  }

  setAuthenticated (state) {
    this.setState({
      isAuthenticated: state
    })
  }
}

export default Login
