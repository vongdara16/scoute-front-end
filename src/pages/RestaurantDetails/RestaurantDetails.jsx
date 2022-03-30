import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import * as reviewService from '../../services/reviewService'
import './RestaurantDetails.css'

const RestaurantDetails = (props) => {
  const location = useLocation()
  const [restaurantData, setRestaurantData] = useState(location.state.restaurant)
  const [reviewData, setReviewData] = useState([])

  useEffect(() => {
    const restaurantId = location.state.restaurant.id
    reviewService.getRestaurantReviews(restaurantId)
    .then(review => setReviewData(review) )
  }, [])

  return (  
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <h1 id="details-name" >{restaurantData.name}</h1>
      <img 
        alt="restaurant-img" style={{width : '100%'}}
        src={
          restaurantData.image_url ? restaurantData.image_url 
          : 
          restaurantData.photo ? restaurantData.photo 
          : 
          'https://picsum.photos/id/398/640/480' 
        } 
      />
      <div id="details-price-distance" >
        <span id="details-price" >{restaurantData.price} </span>
        <span id='distance' >{(restaurantData.distance/1609.34).toFixed(2)} mi</span>
      </div>
      <br /> 
      <div id="details-location-phone" >
        <p>
          <i className="material-icons" >place</i>
          {restaurantData.street ? restaurantData.street : restaurantData.location.address1}
        </p>
        <p>
          <i className="material-icons" >phone</i>
          {restaurantData.display_phone ? restaurantData.display_phone : restaurantData.phoneNumber}
        </p>
      </div>
      <hr id="solid" />
      <div>
        <h3>Reviews will be generated here!</h3>
        {reviewData.map(review => 
          <p key={review.id}>{review.text}</p>  
        )}
      </div>
      <NavBarBot />
    </>
  );
}

export default RestaurantDetails;