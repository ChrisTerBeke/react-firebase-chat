import React from 'react'

// services
import {loginWithGitHub, signOut} from '../services/firebase'

class Login extends React.Component {

  render() {
    return <div style={{
      textAlign: 'center',
      padding: '1em'
    }}>
      
      { !this.props.isAuthenticated && // only show login button when we're not logged in yet
        <a onClick={this.login.bind(this)} className="button button-login">Login with GitHub</a>
      }

      { this.props.isAuthenticated &&
        <a onClick={this.signOut.bind(this)} className="button button-logout">Logout</a>
      }

    </div>
  }

  login () {
    loginWithGitHub().then(response => {
      this.props.setAuthenticated(true)
    }).catch(err => {
      this.props.setAuthenticated(false)
    })
  }

  signOut () {
    signOut().then(() => {
      this.props.setAuthenticated(false)
    })
  }
}

export default Login
