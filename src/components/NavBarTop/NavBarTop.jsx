import { Link } from 'react-router-dom'

const NavBarTop = ({ user, handleLogout, getLocation, page }) => {
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
      {page === 'buttonEnabled' ? 
        <button onClick={(e) => getLocation(e)}>
          <i id='top-icon' className='material-icons'>place</i>
        </button>
      :
        <div></div>
      }
      </nav>
    </>
  )
}


export default NavBarTop
