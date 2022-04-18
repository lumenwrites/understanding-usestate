import { Component } from 'react'

export default class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Jeff'
    }
  }

  render() {
    return (
      <div className="content">
        <h1>Class Component</h1>
        <p>{this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: 'Bob' })
          }}
        >
          Set Name
        </button>
      </div>
    )
  }
}
