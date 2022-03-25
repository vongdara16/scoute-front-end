import { Link } from 'react-router-dom'

const NavBarTop = ({ user, handleLogout }) => {
  return (
    <>
      <nav>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          <i className='material-icons'>person</i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Action</button></li>
            <li><button className="dropdown-item" type="button">Another action</button></li>
            <li><button className="dropdown-item" type="button">Something else here</button></li>
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


{/* <i className='material-icons'>person</i> */}