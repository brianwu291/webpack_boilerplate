import React from "react"
import ReactDOM from "react-dom"
import styled from 'styled-components'

const Wrapper = styled.div``
const Button = styled.button``

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
        <Wrapper>{this.state.data}</Wrapper>
        <Button onClick={this.handleClick}>click</Button>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))