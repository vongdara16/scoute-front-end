import { useState, useEffect } from 'react';
import restaurantService from '../../services/restaurantService'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    restaurantService.getAll()
    .then(allRestaurants => setRestaurants(allRestaurants))
  }, [])

  return ( 
    <>
      <h1>Restaurants</h1>
      <div>
        {restaurants.map(restaurant => (
          <RestaurantCard />
        
          ))}
      </div>

    </>
  );
}

export default Restaurants;