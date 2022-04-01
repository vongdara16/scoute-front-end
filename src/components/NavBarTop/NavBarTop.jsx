import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const NavBarTop = ({ user, handleLogout, getLocation, page, lat, spinner }) => {
  return (
    <>
      <nav id='top-nav-no-search' className='navbar'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          <i id='top-icon' className='material-icons'>person</i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {/* <li><Link to='' className="dropdown-item">Edit Profile</Link></li> */}
          <li><Link to='' onClick={handleLogout} className="dropdown-item">Logout</Link></li>
        </ul>
      </div>
      <img id='scoute-nav-title' src="https://i.imgur.com/6VzsVyU.png" alt="SCOUTE" />
      {page === 'buttonEnabled' ? 
        <button id='geo-btn' onClick={(e) => getLocation(e)}>
          {!spinner ? 
            <i 
              id='top-icon' 
              className='material-icons'
            >
              place
            </i>
          :
            !lat ?
              <div className="spinner-border spinner-border-sm" role="status" id='spinner'>
                <span className="visually-hidden">Loading...</span>
              </div>
            :
              <i id='top-icon' className='material-icons'>
                verified
              </i>  
          }
        </button>
      :
        <div></div>
      }
      </nav>
    </>
  )
}


export default NavBarTop
