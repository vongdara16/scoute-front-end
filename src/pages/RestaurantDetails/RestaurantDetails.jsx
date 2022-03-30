import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
// import { getRestaurantReviews } from "../../services/reviewService";
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import * as reviewService from '../../services/reviewService'
import './RestaurantDetails.css'

const RestaurantDetails = (props) => {
  const location = useLocation()
  console.log(location.state)
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
      <img src={restaurantData.image_url ? restaurantData.image_url : restaurantData.photo ? restaurantData.photo : 'https://picsum.photos/id/398/640/480' } alt="restaurant-img" style={{width : '100%'}}/>
      <div id="details-price-distance" >
        <span id="details-price" >{restaurantData.price} </span>
        <span id='distance' >{(restaurantData.distance/1609.34).toFixed(2)} mi</span>
      </div>
      <br /> {/* this break can be deleted later */}
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
      </div>
      <div>
        <Link to='/restaurants/AddReview' state={{restaurantData}}>
          <button>
            Add Review
          </button>
        </Link>
      </div>
      {reviewData.length ? 
      <div>
        {reviewData.map(review => 
          <div key={review.id}>
            <p>{review.user.name}</p>
            <img 
              src={review.user.image_url ? `${review.user.image_url}` : "https://picsum.photos/id/312/640/480" }
              alt="user-pic" 
              style={{ height: '50px' }}
            />
            <p>{review.rating}</p>
            <p>{review.text}</p>
          </div>
        )}
      </div>
      :
        <h6>No reviews yet</h6>
      }
      
      <NavBarBot />
    </>
  );
}

export default RestaurantDetails;