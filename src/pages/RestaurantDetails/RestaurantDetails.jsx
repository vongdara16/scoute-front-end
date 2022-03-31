import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import * as reviewService from '../../services/reviewService'
import AddReviewForm from '../../components/AddReviewForm/AddReviewForm'
import './RestaurantDetails.css'

const RestaurantDetails = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [restaurantData, setRestaurantData] = useState(location.state.restaurant)
  const [reviewData, setReviewData] = useState([])

  useEffect(() => {
    const restaurantId = location.state.restaurant.id
    reviewService.getRestaurantReviews(restaurantId ? restaurantId : location.state.restaurant._id)
    .then(review => setReviewData(review) )
  }, [])

  const handleAddReview = async newReviewData => {
    const newReview = await reviewService.create(newReviewData)
    setReviewData([newReview, ...reviewData])
  }
  
  reviewData.forEach(review => {
    if (!review.user) {
      review.user = review.author
    }
  })

  const handleDeleteReview = reviewId => {
    reviewService.deleteOne(reviewId)
    .then(deletedReview => setReviewData(reviewData.filter(review => review._id !==deletedReview._id)))
  }

  const handleReviewStars = star => {
    if(props.review.rating === 1){
      return <img src={"public/yelpstars/small_1.png"} alt='review'/>
    }
  }

  return (  
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <h1 id="details-name" >{restaurantData.name}</h1>
      <img id="rest-img"
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
        <h4>Checkout These Awesome Reviews!</h4>
      </div>
      <br></br>
      <div id='review-form'>
        <AddReviewForm handleAddReview={handleAddReview} restaurant={restaurantData}/>
      </div>
      <br></br>
      {reviewData.length ? 
      <div>
        {reviewData.map((review, idx) => 
          <div className='user-review' key={idx}>
            <div id="name-pic-rating">
              <img id="user-pic"
                src={review.user.image_url ? `${review.user.image_url}` : "https://picsum.photos/id/312/640/480" }
                alt="user-pic" 
                style={{ height: '50px' }}
                />
              <img src={`/yelpstars/small_${review.rating}.png`} alt="rating" />
              <p>{review.user.name ? review.user.name : 'Scoute User'}</p>
            </div>
            <br></br>
            <p id ='review'>{review.text}</p>
              {props.user.profile === review.user?._id ?
                <div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={()=> handleDeleteReview(review._id)}
                  >
                    DELETE REVIEW
                  </button>
                </div>
              :
                <></>
              }
          </div>
        )}
        <a href={restaurantData.url} target='_blank' rel="noreferrer">
          <img id='yelp-logo' src="/yelplogo/yelp_logo.png" alt="yelp-logo" />
        </ a>
      </div>
        :
        <h6>No reviews yet</h6>
      }
      
      <NavBarBot page='restaurants'/>
    </>
  );
}

export default RestaurantDetails;