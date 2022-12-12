import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from './components/Nav'
import { BASE_URL } from './globals'
import {
  LoginHost,
  LoginUser,
  RegisterHost,
  RegisterUser
} from './services/Authorize'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [host, setHost] = useState(null)
  const [tailgateList, setTailgateList] = useState([])
  const [feedback, setFeedback] = useState(null)
  const [editFeedback, setEditFeedback] = useState(null)
  const [selectedTailgate, setSelectedTailgate] = useState(null)

  const getTailgates = async () => {
    const res = await axios.get(`${BASE_URL}/tailgates`)
    setTailgateList(res.data)
  }
  useEffect(() => {
    getTailgates
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar
          authenticated={authenticated}
          user={user}
          host={host}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                host={host}
                authenticated={authenticated}
                tailgateList={tailgateList}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginUser
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/loginHost"
            element={
              <LoginHost
                setHost={setHost}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/tailgate/:id"
            element={
              <TailgateDetails
                selectedTailgate={selectedTailgate}
                authenticated={authenticated}
                user={user}
                host={host}
              />
            }
          />
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/registerHost" element={<RegisterHost />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/createTailgate"
            element={<CreateTailgate host={host} />}
          />
          <Route path="/mytailgate" element={<MyTailgateUser user={user} />} />
          <Route path="hostTailgate" element={<HostTailgate host={host} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
