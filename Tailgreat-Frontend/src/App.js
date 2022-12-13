import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import CreateTailgate from './pages/CreateTailgate'
import HostTailgate from './pages/HostTailgate'
import LoginHost from './pages/LoginHost'
import LoginUser from './pages/LoginUser'
import MyTailgateUser from './pages/MyTailgateUser'
import TailgateDetails from './pages/TailgateDetails'
import RegisterUser from './pages/RegisterUser'
import RegisterHost from './pages/RegisterHost'
import axios from 'axios'
import { BASE_URL } from './globals'
import { CheckSession } from './services/Authorize'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [host, setHost] = useState(null)
  const [tailgates, setTailgates] = useState([])
  // const [feedback, setFeedback] = useState(null)
  // const [editFeedback, setEditFeedback] = useState(null)
  const [selectedTailgate, setSelectedTailgate] = useState([])

  let navigate = useNavigate()

  const getTailgates = async () => {
    const res = await axios.get(`${BASE_URL}/tailgates`)
    setTailgates(res.data)
  }
  useEffect(() => {
    getTailgates()
  }, [])

  const chooseTailgate = (selected) => {
    setSelectedTailgate(selected)
    navigate(`/tailgates/${selected.id}`)
  }

  const handleLogOut = () => {
    setUser(null)
    setHost(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

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
              <Home tailgates={tailgates} chooseTailgate={chooseTailgate} />
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
            path="/loginhost"
            element={
              <LoginHost
                setHost={setHost}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/:tailgate_id"
            element={
              <TailgateDetails
                selectedTailgate={selectedTailgate}
                authenticated={authenticated}
                user={user}
                host={host}
              />
            }
          />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/registerhost" element={<RegisterHost />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/createtailgate"
            element={<CreateTailgate host={host} />}
          />
          <Route
            path="/mytailgate/:user_id"
            element={
              <MyTailgateUser user={user} authenticated={authenticated} />
            }
          />
          <Route
            path="/hosttailgate:host_id"
            element={<HostTailgate host={host} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
