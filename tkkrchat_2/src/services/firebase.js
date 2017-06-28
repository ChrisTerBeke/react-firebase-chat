import firebase from 'firebase'

// config firebase
firebase.initializeApp({
  "apiKey": "AIzaSyA4dvQ_4Fptlk-4_GGp0GGO396ejyjhN_M",
  "databaseURL": "https://tkkrchat.firebaseio.com",
  "storageBucket": "tkkrchat.appspot.com",
  "authDomain": "tkkrchat.firebaseapp.com",
  "messagingSenderId": "154863745543",
  "projectId": "tkkrchat"
});

// GitHub auth setup
const gitHubAuthProvider = new firebase.auth.GithubAuthProvider()

// create new auth instance
const auth = firebase.auth()

// listen to auth changes and store user data under known key
auth.onAuthStateChanged(user => {
  if (user) localStorage.setItem('firebase_auth:user', JSON.stringify(user))
  else localStorage.removeItem('firebase_auth:user')
})

/**
 * Check if we're logged in
 */
export const isAuthenticated = () => {
  return auth.currentUser || localStorage.getItem('firebase_auth:user')
}

/**
 * Login with GitHub
 */
export const loginWithGitHub = () => {
  return auth.signInWithPopup(gitHubAuthProvider).then(response => {
    // TODO: store user data in DB

    // return for promise chain
    return response
  })
}

/**
 * Get currently authorized user
 */
export const getUser = () => {
  return JSON.parse(localStorage.getItem('firebase_auth:user'))
}

/**
 * End session
 */
export const signOut = () => {
  return auth.signOut()
}

// TODO: reset password
// TODO: register new user