import { Link } from 'react-router-dom'
import './NavBarTopSearch.css'

const NavBarTopSearch = ({ user, handleLogout, handleChange, handleSubmit, isFormInvalid, search }) => {
  return (
    <>
      <nav id='top-nav-no-search' className='navbar'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          <i id='top-icon' className='material-icons'>person</i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><Link to='' className="dropdown-item">Edit Profile</Link></li>
          <li><Link to='' onClick={handleLogout} className="dropdown-item">Logout</Link></li>
        </ul>
      </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className='material-icons top-search-icon '>search</i>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input 
              className="form-control me-2" 
              type="search" 
              aria-label="Search"
              placeholder="Enter Location" 
              id='search'
              value={search}
              name='search'
              onChange={handleChange}
            />
            <button 
              className="btn btn-outline-success" 
              type="submit"
              disabled={isFormInvalid()}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavBarTopSearch
