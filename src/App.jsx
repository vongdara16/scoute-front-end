import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBarTop/NavBarTop'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Home from './pages/Home/Home'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import Restaurants from './pages/RestaurantList/RestaurantList'
import Restrooms from './pages/RestroomList/RestroomList'
import Parkings from './pages/ParkingList/ParkingList'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <Routes>
        <Route 
          path='/home'
          element={user ? <Home user={user} /> : <Navigate to="/" />}
        />
        <Route 
          path="/" 
          element={<Landing handleSignupOrLogin={handleSignupOrLogin} />} 
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/restaurants"
          element={user ? <Restaurants /> : <Navigate to="/" />}
        />
        <Route
          path="/parkinglots"
          element={user ? <Parkings /> : <Navigate to="/" />}
        />
        <Route
          path="/restrooms"
          element={user ? <Restrooms /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  )
}

export default App
