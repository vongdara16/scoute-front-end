import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";

const RestaurantDetails = (props) => {
  const location = useLocation()
  // const theRestaurant = location.state.restaurant
  const [restaurantData, setRestaurantData] = useState(location.state.restaurant)

  return (  
    <>
      <NavBarTop />
      <h1>{restaurantData.name}</h1>
      <img src={restaurantData.image_url} alt="restaurant-img" style={{width : '100%'}}/>
      <div>
        <span>Price: {restaurantData.price} | </span>
        <span id='distance' >{(restaurantData.distance/1609.34).toFixed(2)} mi</span>
      </div>
      <br /> {/* this break can be deleted later */}
      <div>
        <p>Address: {restaurantData.location.address1}</p>
        <p>Phone: {restaurantData.display_phone}</p>
      </div>
      <div>
        <h3 style={{height : '100vh'}} >Reviews will be generated here!</h3>
      </div>
      {/* {console.log(theRestaurant)} */}
      <NavBarBot />
    </>
  );
}
 
export default RestaurantDetails;