import React, { Component } from 'react';

// custom components
import UserSearch from './components/UserSearch'

// styles - using basscss
import 'ace-css/css/ace.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="max-width-4 mx-auto">
        <h1>Github User Search with FireBase</h1>
        <UserSearch />
      </div>
    );
  }
}

export default App;
