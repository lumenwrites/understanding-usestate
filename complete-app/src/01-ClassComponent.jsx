import { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="content">
        <p>{this.state.count}</p>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          Increment counter
        </button>
      </div>
    )
  }
}
