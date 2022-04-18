import { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="content">
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >
          Click me
        </button>
      </div>
    )
  }
}
