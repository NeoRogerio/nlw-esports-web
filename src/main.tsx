import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Button } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Button title="Send 1"/>
    <Button title="Send 2"/>
    <Button title="Send 3"/>
    <Button title="Hello World"/>
  </React.StrictMode>
)
