import { NavLink } from "react-router-dom"

const NavBar = ({ authenticated, user, host, handleLogout}) => {
  let userOptions
  let hostOptions
  if (user) {
  userOptions = (
    <div>
      <NavLink to="/" className='nav-link home'>Home</NavLink>
      <NavLink to="/about" className='nav-link about'>About</NavLink>
      <NavLink to={`/mytailgate/${user.id}`} className='nav-link mytailgate'>My Tailgate</NavLink>
      <NavLink onClick={handleLogout} to='/'
      className='nav-link logout'>Log Out</NavLink>
    </div>
    )
  }
  else (host) => {
    hostOptions = (
      <div className="nav-text">
      <NavLink to="/" className='nav-link home'>Home</NavLink>
      <NavLink to="/about" className='nav-link about'>About</NavLink>
      <NavLink to={`/hosttailgate/${host.id}`} className='nav-link hosttailgate'>My Tailgate</NavLink>
      <NavLink onClick={handleLogout} to='/'
      className='nav-link logout'>Log Out</NavLink>
      </div>
    )
  }

  const globalOptions = (
    <div>
      <NavLink to="/about" className='nav-link about'>About</NavLink>
      <NavLink to="/loginHost" className='nav-link loginhost'>Host Login</NavLink>
      <NavLink to="/registerHost" className='nav-link registerhost'>Register as a Host</NavLink>
      <NavLink to="/login" className='nav-link loginuser'>User Login</NavLink>
      <NavLink to="/registeruser">Register as a User</NavLink>
    </div>
  )

  if (user)
  return (
<div>
  <div className="header">
    <div className="header-text">TailGreat</div>
    <h2 className="username-display">Welcome {user && `${user.username}`}!</h2>
    <nav className="nav-container">
      <div>
        {authenticated && user ? userOptions : globalOptions}
      </div>
    </nav>
  </div>
</div>
  )
  else (host) => {
    <div>
  <div className="header">
    <div className="header-text">TailGreat</div>
    <h2 className="username-display">Welcome {host && `${host.hostName}`}!</h2>
    <nav className="nav-container">
      <div>
        {authenticated && host ? hostOptions : globalOptions}
      </div>
    </nav>
  </div>
</div>
  }
}

export default NavBar