import { useState, useEffect } from 'react';
import * as restaurantService from '../../services/restaurantService'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import NavBarBot from '../../components/NavBarBot/NavBarBot';
import NavBarTopSearch from '../../components/NavBarTopSearch/NavBarTopSearch';

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
      <NavBarTopSearch />
      <h1>Restaurants</h1>
      <div>
        {restaurants.map((restaurant, idx) => 
          // <h2>test</h2>
          <RestaurantCard 
            key={idx}
            restaurant={restaurant}
          />
          // console.log(idx)
          // console.log(restaurant)
          

        )}
        <NavBarBot />
      </div>
    </>
  );
}

export default Restaurants;