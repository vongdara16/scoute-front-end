import { useState, useEffect } from 'react';
import * as restaurantService from '../../services/restaurantService'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState(['test1', 'test2', 'test3'])
  //^^ the use state in this is temporary so i can see the cards

  useEffect(() => {
    restaurantService.getAll()
    // .then(allRestaurants => setRestaurants(allRestaurants))
    //^^ above is commented out to not overwrite the state
  }, [])

  return ( 
    <>
      <h1>Restaurants</h1>
      <div>
        {restaurants.map((restaurant, idx) => 
          // <h2>test</h2>
          <RestaurantCard 
            key={idx}
          />
          // console.log(idx)
          // console.log(restaurant)
          

        )}
      </div>
    </>
  );
}

export default Restaurants;