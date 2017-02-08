import React, { Component } from 'react'

// firebase config
import firebase from 'firebase/app'
import 'firebase/database'

// libs
import { searchUser } from './api'
import config from './config'

// custom components
import UserSearch from './components/UserSearch'
import UserResults from './components/UserResults'
import ErrorResults from './components/ErrorResults'
import FirebaseResponse from './components/FirebaseResponse'

// styles - using basscss
import 'ace-css/css/ace.min.css'
import './App.css'

/*
  This component takes care of everything
  Ideally, I would like to refactor this using redux
  and separating data/actions out into its own file

  Firebase config is public read/write.
  Ideally this would be authenticated with
  an oAuth provider or another source
*/

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      saved: null,
    }

    this.firebase = null
  }

  componentDidMount() {
    this.firebase = firebase.initializeApp(config.firebaseConfig)
  }

  // could organize this into redux
  // for sake of brevity will do api components here
  handleUserSearch = (username) => {
    searchUser(username)
      .then(this.handleUserSearchSuccess)
      .catch(this.handleUserSearchError.bind(this, username))
  }

  handleUserSearchSuccess = (response) => {
    this.setState({
      user: response,
    })

    this.saveUser(response)
  }

  handleUserSearchError = (username) => {
    console.log('user not found: ', username);
    this.setState({
      user: {
        name: username
      }
    })
  }

  handleSearchReset = () => {
    this.setState({
      user: null
    })
  }

  saveUser = (user) => {
    let db = this.firebase.database()

    const {
      id,
      login,
      name,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      url,
    } = user

    db.ref(`users/${id}`).set({
      login,
      name,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      url,
    })
    .then(response => {
      this.setState({
        saved: true
      })
    })
    .catch(err => {
      this.setState({
        saved: false
      })
    })
  }

  render() {
    const { user, saved } = this.state
    const userFound = user && user.hasOwnProperty('id') !== false

    return (
      <div className="max-width-3 mx-auto">
        <h1>Github User Search with FireBase</h1>
        <UserSearch
          callback={this.handleUserSearch}
          resetSearch={this.handleSearchReset} />
        {userFound &&
          <div>
            <UserResults {...user} />
            <FirebaseResponse state={saved} user={user} />
          </div>
        }
        {!userFound && <ErrorResults {...user} />}
      </div>
    );
  }
}

export default App;
