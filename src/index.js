import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  state = { data: 'hello' }

  handleClick = () => {
    if (this.state.data === 'world') {
      this.setState({ data: 'hello' })
    } else {
      this.setState({ data: 'world' })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.data}</div>
        <button onClick={this.handleClick}>click</button>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))