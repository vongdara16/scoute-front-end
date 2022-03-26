import { Link } from 'react-router-dom'

const NavBarTop = ({ user, handleLogout }) => {
  return (
    <>
      <nav id='top-nav-no-search' className='navbar'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          <i id='top-icon' className='material-icons'>person</i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {/* <li><Link to='' className="dropdown-item">{user.name}</Link></li> */}
          <li><Link to='' className="dropdown-item">Edit Profile</Link></li>
          <li><Link to='' onClick={handleLogout} className="dropdown-item">Logout</Link></li>
        </ul>
      </div>
        {/* <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
        </ul> */}
      </nav>
    </>
  )
}


export default NavBarTop
