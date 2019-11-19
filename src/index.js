import React, { useContext } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import ThemeContext from './ThemeContext'

const Container = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const Wrapper = styled.div`
    background-color: ${theme === 'light' ? 'azure' : 'black'}
  `
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const AnchorSection = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const Wrapper = styled.div`
    a {
      display: block;
      color: ${theme === 'light' ? 'black' : 'white'}
    }
  `
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
const Button = styled.button``

const Hello = () => {
  const { theme } = useContext(ThemeContext)
  const Wrapper = styled.div`
    color: ${theme === 'light' ? 'black' : 'white'}
  `
  return (
    <Wrapper>
      {'Hello'}
    </Wrapper>
  )
}

const World = () => {
  const { theme } = useContext(ThemeContext)
  const Wrapper = styled.div`
    color: ${theme === 'light' ? 'black' : 'white'}
  `
  return (
    <Wrapper>
      {'World'}
    </Wrapper>
  )
}

// example using class syntax to in purpose
class App extends React.Component {
  state = { theme: 'light' }

  handleThemeChange = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' })
    } else {
      this.setState({ theme: 'light' })
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme }}>
        <Container>
          <BrowserRouter>
            <Route exact path="/hello" component={Hello} />
            <Route exact path="/world" component={World} />
              <AnchorSection>
                <Link to="/">
                  click to home
                </Link>
                <Link to="/hello">
                  click to Hello
                </Link>
                <Link to="/world">
                  click to world
                </Link>
              </AnchorSection>
              <Button onClick={this.handleThemeChange}>Change Theme</Button>
          </BrowserRouter>
        </Container>
      </ThemeContext.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))