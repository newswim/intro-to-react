import React, { Component, Fragment } from 'react'

export default class Counter extends Component {
  state = {
    count: 0
  }

  handleClick = () => this.setState({ count: this.state.count + 1 })
  render() {
    return (
      <Fragment>
        <p>Current count: {this.state.count}</p>
        <button style={{
          backgroundColor: 'rgba(20, 20, 20, .4)',
          fontSize: 24,
          color: 'white',
          border: 'none',
          padding: '4px 8px',
          cursor: 'pointer'
        }}
        onClick={this.handleClick}>Higher</button>
      </Fragment>
    )
  }
}
