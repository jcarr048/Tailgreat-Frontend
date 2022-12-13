import { NavLink } from "react-router-dom"

const NavBar = ({ user, host, handleLogOut}) => {
  if (user)
  return (
<div>
  <div className="header">
    <div className="header-text">TailGreat</div>
    <h2 className="username-display">Welcome {user.username}!</h2>
    <nav className="nav-container">
    <div>
      <NavLink to="/" className='nav-link home'>Home</NavLink>
      <NavLink to="/about" className='nav-link about'>About</NavLink>
      <NavLink to={`/mytailgate/${user.id}`} className='nav-link mytailgate'>My Tailgate</NavLink>
      <NavLink onClick={handleLogOut} to='/'
      className='nav-link logout'>Log Out</NavLink>
    </div>
    </nav>
  </div>
</div>
  )
  else if (host) 
  return (
    <div>
  <div className="header">
    <div className="header-text">TailGreat</div>
    <h2 className="username-display">Welcome {host.hostName}!</h2>
    <nav className="nav-container">
      <div>
      <NavLink to="/" className='nav-link home'>Home</NavLink>
      <NavLink to="/about" className='nav-link about'>About</NavLink>
      <NavLink to={`/hosttailgate/${host.id}`} className='nav-link hosttailgate'>My Tailgate</NavLink>
      <NavLink to="/createtailgate" className='nav-link createtailgate'>Create New Tailgate</NavLink>
      <NavLink onClick={handleLogOut} to='/'
      className='nav-link logout'>Log Out</NavLink>
      </div>
    </nav>
  </div>
</div>
  )
  else 
  return (
  <div>
  <div className="header">
    <div className="header-text">TailGreat</div>
    <h2 className="username-display">Welcome Guest!</h2>
    <nav className="nav-container">
    <div> 
    <NavLink to="/" className='nav-link home'>Home</NavLink>
      <NavLink to="/about" className='nav-link about'>About</NavLink>
      <NavLink to="/loginHost" className='nav-link loginhost'>Host Login</NavLink>
      <NavLink to="/registerHost" className='nav-link registerhost'>Register as a Host</NavLink>
      <NavLink to="/login" className='nav-link loginuser'>User Login</NavLink>
      <NavLink to="/registeruser">Register as a User</NavLink>
    </div>
    </nav>
  </div>
</div>
  )
}

export default NavBar