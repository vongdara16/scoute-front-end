import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";

const RestaurantDetails = (props) => {
  const location = useLocation()
  // const theRestaurant = location.state.restaurant
  const [restaurantData, setRestaurantData] = useState(location.state.restaurant)
  const [reviews, setReviews] = useState([])

  return (  
    <>
      <NavBarTop />
      <h1>dis da restaurant detailz page</h1>
      <h1>{restaurantData.name}</h1>
      <img src={restaurantData.image_url} alt="restaurant-img" style={{width : '40%'}}/>
      <div>
        <span>Price: {restaurantData.price} | </span>
        <span>Distance: {restaurantData.distance} yeets away</span>
      </div>
      <br /> {/* this break can be deleted later */}
      <div>
        <p>Location: {restaurantData.location.address1}</p>
        <p>Phone: {restaurantData.phone}</p>
      </div>
      <div>
        <h3>Reviews will be generated here!</h3>
      </div>
      {/* {console.log(theRestaurant)} */}
      <NavBarBot />
    </>
  );
}
 
export default RestaurantDetails;