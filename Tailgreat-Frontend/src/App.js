import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
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
import { useEffect, useState } from 'react'
import NavBar from './components/Nav'
import { BASE_URL } from './globals'
import { CheckSession } from './services/Authorize'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [host, setHost] = useState(null)
  const [tailgateList, setTailgateList] = useState([])
  // const [feedback, setFeedback] = useState(null)
  // const [editFeedback, setEditFeedback] = useState(null)
  const [selectedTailgate, setSelectedTailgate] = useState(null)

  let navigate = navigate()

  const getTailgates = async () => {
    const res = await axios.get(`${BASE_URL}/tailgates`)
    setTailgateList(res.data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    getTailgates()
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
