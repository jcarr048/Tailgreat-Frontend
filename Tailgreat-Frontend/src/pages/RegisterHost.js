import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegHost } from '../services/Authorize'
import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const initialState = {
    hostName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    age: ''
  }
  const [formValues, setFormValues] = useState({
    initialState
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegHost({
      hostName: formValues.hostName,
      email: formValues.email,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      age: formValues.age
    })
    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div className="siginin col">
      <div className="card-overlay">
        <form className="col" onSubmit={handleSubmit}>
          <label className="label" htmlFor="host-username">
            Host Username
          </label>
          <input
            className="input"
            onChange={handleChange}
            name="hostName"
            type="text"
            placeholder="footballfan12"
            value={formValues.hostName}
            required
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            onChange={handleChange}
            name="password"
            type="password"
            value={formValues.password}
            required
          />
          <label className="label" htmlFor="password-confirm">
            Password Confirmation
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="password-confirm"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
          />
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="Fred"
            value={formValues.firstName}
            required
          />
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Football"
            value={formValues.lastName}
            required
          />
          <label className="label" htmlFor="age">
            Age
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="integer"
            name="age"
            value={formValues.age}
            required
          ></input>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
        <Link to={'/loginhost'}>
          <button>Already A User?</button>
        </Link>
      </div>
    </div>
  )
}

export default Register
