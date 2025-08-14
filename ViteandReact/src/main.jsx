import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//Basic creation
const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

//Using react
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google page'
)

createRoot(document.getElementById('root')).render(
  <App/>
)
