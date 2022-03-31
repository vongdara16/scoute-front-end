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
import * as restaurantService from './services/restaurantService'
import * as parkingService from './services/parkingService'
import * as restroomService from './services/restroomService'
import Restaurants from './pages/RestaurantList/RestaurantList'
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails'
import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import Restrooms from './pages/RestroomList/RestroomList'
import RestroomDetails from './pages/RestroomDetails/RestroomDetails'
import Parkinglots from './pages/ParkingList/ParkingList'
import AddParking from './pages/AddParking/AddParking'
import ParkingDetails from './pages/ParkingDetails/ParkingDetails'
import EditParking from './pages/EditParking/EditParking'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [parkinglots, setParkinglots] = useState([])
  const [restrooms, setRestrooms] = useState([])
  const [reviews, setReviews] = useState([])
  const [message, setMessage] = useState([''])
  const [restaurants, setRestaurants] = useState([])
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [searchData, setSearchData] = useState({
    search: ''
  })
  
  const navigate = useNavigate()

  const getLocation = async evt => {
    try {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        await restroomService.getAllRestrooms(position.coords.latitude, position.coords.longitude)
        .then(restroom => {
          setRestrooms(restroom)
        })
        await restaurantService.getAllByGeo(position.coords.latitude, position.coords.longitude)
        .then(restaurant => {
          setRestaurants(restaurant)
        })
      })
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleChange = e => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await restaurantService.getAll(searchData.search)
      .then(search => {
        setRestaurants(search)
      })
    } 
    catch (err) {
      console.log(err);
    }
  }

  const handleSubmitParking = async evt => {
    evt.preventDefault()
    try {
      await parkingService.getAll(searchData.search)
      .then(search => {
        setParkinglots([...parkinglots, ...search])
      })
    }
    catch (err) {
      console.log(err)
    }
  }
  
  const { search } = searchData
  
  const isFormInvalid = () => {
    return!(search)
  }

  const handleAddRestaurant = async newRestaurantData => {
    const newRestaurant = await restaurantService.create(newRestaurantData)
    setRestaurants([newRestaurant, ...restaurants])
    navigate('/restaurants')
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const updateMessage = msg => {
    setMessage(msg)
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddParking = async newParkingData => {
    const newParking = await parkingService.create(newParkingData)
    console.log(newParking)
    
    // const test = newParking.pop()
    setParkinglots([...parkinglots, newParking])
    navigate('/parkinglots')
  }

  const handleDeleteParking = id => {
    parkingService.deleteOne(id)
    .then(deletedParkinglot => setParkinglots(parkinglots.filter(parkinglot => parkinglot._id !== deletedParkinglot._id)))
    navigate('/parkinglots')
  }

  const handleUpdateParking = (updatedParkinglotData, parkingid) => {
    parkingService.update(updatedParkinglotData, parkingid)
    .then(updatedParkinglot => {
      const newParkingArray = parkinglots.map(parkinglot => parkinglot._id === updatedParkinglot._id ? updatedParkinglot : parkinglot)
      setParkinglots(newParkingArray)
      navigate('/parkinglots')
    })
  }

  return (
    <>
      <Routes>
        <Route 
          path='/home'
          element={user ? 
            <Home 
              user={user} 
              handleLogout={handleLogout}
              getLocation={getLocation}
              page='buttonEnabled'
            /> 
            : 
            <Navigate to="/" />
          }
        />
        <Route 
          path="/" 
          element={
            <Landing 
              updateMessage={updateMessage} 
              handleSignupOrLogin={handleSignupOrLogin} 
            />
          } 
        />
        <Route
          path="/signup"
          element={
            <Signup 
              handleSignupOrLogin={handleSignupOrLogin} 
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login 
              handleSignupOrLogin={handleSignupOrLogin} 
            />
          }
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? 
            <ChangePassword 
              handleSignupOrLogin={handleSignupOrLogin} 
            /> 
            : 
            <Navigate to="/login" />
          }
        />
        <Route
          path="/restaurants"
          element={user ? 
            <Restaurants 
              getLocation={getLocation}
              handleChangeRestaurant={handleChange}
              handleSubmitRestaurant={handleSubmit}
              isFormInvalid={isFormInvalid}
              search={search}
              restaurants={restaurants}
              handleLogout={handleLogout}
              user={user} 
            /> 
            : 
            <Navigate to="/" />
          }
        />
        <Route
          path="/restaurants/:id"
          element={user ? 
            <RestaurantDetails 
              handleLogout={handleLogout} 
              user={user} 
            /> 
            : 
            <Navigate to="/" />
          }
        />
        <Route 
          path="/restaurants/add"
          element={user ? 
            <AddRestaurant 
              handleAddRestaurant={handleAddRestaurant} 
              handleLogout={handleLogout}
              user={user} 
            /> 
            : 
            <Navigate to="/" />
          }
        />
        <Route
          path="/parkinglots"
          element={user ? 
            <Parkinglots
              search={search}
              handleChangeParking={handleChange}
              handleSubmitParking={handleSubmitParking}
              parkinglots={parkinglots} 
              handleLogout={handleLogout}
              user={user} 
              isFormInvalid={isFormInvalid}
            />
            : 
            <Navigate to="/" />
          }
        />
        <Route
          path="/parkinglots/add"
          element={user ? 
            <AddParking 
              handleAddParking={handleAddParking}
              handleLogout={handleLogout}
              user={user} 
            /> 
            : 
            <Navigate to='/' />
          }
        />
        <Route
          path="/parkinglots/:id"
          element={user ? 
              <ParkingDetails 
                user={user}
                handleLogout={handleLogout}
                handleDeleteParking={handleDeleteParking}
              /> 
              : 
              <Navigate to="/parkinglots"/>
            }
        />
        <Route
        path='/parkinglots/:id/edit'
        element={user ?
          <EditParking handleUpdateParking={handleUpdateParking}/> : <Navigate to="/parkinglots" />}
        />
        <Route
          path="/restrooms"
          element={user ? 
            <Restrooms
              handleLogout={handleLogout}
              user={user} 
              getLocation={getLocation}
              lat={lat}
              lng={lng} 
              // handleRestrooms={handleRestrooms}
              restrooms={restrooms}
              isFormInvalid={isFormInvalid}
              page='buttonEnabled'
            /> 
          : 
            <Navigate to="/" />
        }
        />
        <Route
          path="/restrooms/:id"
          element={user ? 
            <RestroomDetails 
              user={user}
              handleLogout={handleLogout}
            /> 
            : 
            <Navigate to="/restrooms"/>
          }
        />
      </Routes>
    </>
  )
}

export default App