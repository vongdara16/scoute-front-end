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

  const [restaurants, setRestaurants] = useState({})

  const handleChange = e => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await restaurantService.getAll(searchData.input)
      .then(search => {
        setSearchData(search)
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
      <div id='return-card'>
        {restaurants.map((restaurant, idx) => 
          // <h2>test</h2>
          <RestaurantCard 
            key={idx}
            restaurant={restaurant}
          />
          // console.log(idx)
          // console.log(restaurant)
          

          )}
      </div>
      <NavBarBot />
    </>
  );
}

export default Restaurants;