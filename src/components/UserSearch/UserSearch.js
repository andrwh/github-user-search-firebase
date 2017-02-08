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

  componentDidMount() {
    this.refs.input.addEventListener('search', (e) => {
      if (e.target.value.length === 0) {
        this.props.resetSearch()
      }
    })
  }

  handleKeyPress = (e) => {
    const isEnter = e.key === 'Enter'

    if (isEnter) {
      this.props.callback.call(this, this.state.input)
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })

    if (e.target.value.length === 0) {
      this.props.resetSearch()
    }
  }

  render() {
    const { input } = this.state

    return (
      <div>
        <input
          id="user-search"
          type="search"
          className="input"
          value={input}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          ref="input" />
      </div>
    )
  }
}

export default UserSearch

UserSearch.defaultProps = {
  callback: () => {},
  resetSearch: () => {},
}
