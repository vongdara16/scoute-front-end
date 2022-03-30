import { Link } from 'react-router-dom'
import './NavBarBot.css'

const NavBarBot = ({page}) => {
  return (
    <>
      <nav id='nav-bar-bottom' className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/home'>
            <i className='material-icons bot-nav-icon'>home</i>
          </Link>
          <Link to='/restrooms'>
            <i className='material-icons bot-nav-icon'>wc</i>
          </Link>
          <Link 
            to={page ? `/${page}/add` : '/home'}
          >
            <i className='material-icons bot-nav-icon dropup-toggle'>add_circle</i>
          </Link>
          <Link to='/parkinglots'>
            <i className='material-icons bot-nav-icon'>local_parking</i>
          </Link>
          <Link to='/restaurants'>
            <i className='material-icons bot-nav-icon'>restaurant</i>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBarBot
