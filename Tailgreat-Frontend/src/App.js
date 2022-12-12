import './index.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
    </div>
  )
}

export default App
