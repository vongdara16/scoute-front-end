import { useState, useEffect } from 'react';
import * as restaurantService from '../../services/restaurantService'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import NavBarBot from '../../components/NavBarBot/NavBarBot';
import NavBarTopSearch from '../../components/NavBarTopSearch/NavBarTopSearch';

const Restaurants = (props) => {
  //below is temporary
  const [searchData, setSearchData] = useState({
    search: ''
  })

  const [restaurants, setRestaurants] = useState([])

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
  
  const { input } = searchData
  
  const isFormInvalid = () => {
    return!(input)
  }

  // useEffect(() => {
  //   restaurantService.getAll()
  //   // .then(allRestaurants => setRestaurants(allRestaurants))
  //   //^^ above is commented out to not overwrite the state
  // }, [])

  return ( 
    <>
      <NavBarTopSearch 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        isFormInvalid={isFormInvalid} 
        input={input}
      />
      <h1>Restaurants</h1>
      <div>
        {!restaurants.length ? 
          <h2>No rest</h2>
        :
          <h2>
            {restaurants.map((restaurant1, idx) => 
              <RestaurantCard key={idx} restaurant={restaurant1} />
            )}
          </h2>
        }
      </div>
      <NavBarBot />
    </>
  );
}

export default Restaurants;