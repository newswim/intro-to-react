import React from 'react'

const randomNumber = () => Math.floor(Math.random() * 100) + 1

export default class HomeView extends React.Component {
  state = { randomNumber: randomNumber() }
  newNumber = () => this.setState({ randomNumber: randomNumber() })
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p onClick={this.newNumber}>
          Random number: {this.state.randomNumber} (click for another)
        </p>
        <textarea defaultValue="Notes..."></textarea>
      </div>
    )
  }
}
