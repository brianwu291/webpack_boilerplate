import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  console.log('render')
  return (
    <div>div</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
