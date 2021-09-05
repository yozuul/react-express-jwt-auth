import React from 'react'
import ReactDOM from 'react-dom'
import './components/_ui/styles.scss'
import App from './App'

ReactDOM.render(
    <App />,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}