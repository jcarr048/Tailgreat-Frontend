import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogHost } from '../services/Authorize'

const LoginHost = ({ toggleAuthenticated, setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LogHost(formValues)
    setFormValues({ hostName: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/mytailgate/:user_id')
  }
  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <label className="label" htmlFor="hostname">
            Hostname
          </label>
          <input
            className="input"
            onChange={handleChange}
            name="hostname"
            type="hostname"
            placeholder="fredfootball1234"
            value={formValues.username}
            required
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
          <button disabled={!formValues.username || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginHost
