import React from 'react'

// uses a class to handle local state for input
// (otherwise would have to rerender every time if state is kept in the parent)
class UserSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    // watch for enter key or blur ?
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const { input } = this.state
    
    return (
      <div>
        <input id="user-search" type="search" className="input" value={input} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default UserSearch
