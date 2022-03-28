import { useState, useEffect } from 'react';
import * as restaurantService from '../../services/restaurantService'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import NavBarBot from '../../components/NavBarBot/NavBarBot';
import NavBarTopSearch from '../../components/NavBarTopSearch/NavBarTopSearch';

const Restaurants = (props) => {
  //below is temporary
  const testRestaurant = {
    "rating": 4,
    "price": "$",
    "phone": "+14152520800",
    "id": "E8RJkjfdcwgtyoPMjQ_Olg",
    "alias": "four-barrel-coffee-san-francisco",
    "is_closed": false,
    "categories": [
      {
        "alias": "coffee",
        "title": "Coffee & Tea"
      }
    ],
    "review_count": 1738,
    "name": "Four Barrel Coffee",
    "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
    "coordinates": {
      "latitude": 37.7670169511878,
      "longitude": -122.42184275
    },
    "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
    "location": {
      "city": "San Francisco",
      "country": "US",
      "address2": "",
      "address3": "",
      "state": "CA",
      "address1": "375 Valencia St",
      "zip_code": "94103"
    },
    "distance": 1604.23,
    "transactions": ["pickup", "delivery"]
  }
  const [restaurants, setRestaurants] = useState([testRestaurant, 'test2', 'test3'])
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