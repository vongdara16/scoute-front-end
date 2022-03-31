import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import * as reviewService from '../../services/reviewService'
import AddReviewForm from '../../components/AddReviewForm/AddReviewForm'
import './RestroomDetails.css'
import '../RestaurantDetails/RestaurantDetails.css'

const RestroomDetails = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [restroomData, setrestroomData] = useState(location.state.restroom)
  const [reviewData, setReviewData] = useState([])

  useEffect(() => {
    const restroomId = location.state.restroom.id
    reviewService.getRestroomReviews(restroomId ? restroomId : location.state.restroom._id)
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

  return (  
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <h1 id="details-name" >{restroomData.name}</h1>
      <img 
        alt="restroom-img" 
        style={{width : '100%'}}
        src='https://picsum.photos/id/323/640/480' 
      />
      <div id="uni-change-acc">
        {restroomData.unisex ? 
          <i
            id='rr-uni' 
            className='material-icons'>
              wc
          </i>
        :
          <i
            id='not-avail' 
            className='material-icons'>
            wc
          </i>
        }
        {restroomData.changing_table ? 
          <i
            id='rr-baby' 
            className='material-icons'>
            baby_changing_station
          </i>
        :
          <i
            id='not-avail' 
            className='material-icons'>
            baby_changing_station
          </i>
        }
        {restroomData.accessible ? 
          <i
            id='rr-acc' 
            className='material-icons'>
            accessible
          </i>
        :
          <i
            id='not-avail' 
            className='material-icons'>
            not_accessible
          </i>
        }
      </div>
      <div id="details-price-distance" >
        <span id="details-price" >{restroomData.price} </span>
        
      </div>
      <br /> 
      <div id="details-location-phone" >
        <p id="rr-street">
          <i className="material-icons" >place</i>
          {restroomData.street ? restroomData.street : restroomData.location.address1}
        </p>
        <span id='rr-distance'>
          <i
            id='rr-miles' 
            className='material-icons'>
            directions_walk
          </i>
          {(restroomData.distance).toFixed(2)} mi
        </span>
      </div>
      <hr id="solid" />
      {reviewData.length ? 
        <div>
          <h4>Checkout These Awesome Reviews!</h4>
        </div>
      :
        <></>
      }
      <div id="review-form">
        <AddReviewForm handleAddReview={handleAddReview} restroom={restroomData}/>
      </div>
      {reviewData.length ? 
      <div>
        {reviewData.map((review, idx) => 
          <div key={idx} className='user-review'>
            <div id="name-pic-rating">
              <img id='user-pic'
                src={review.user.image_url ? `${review.user.image_url}` : "https://picsum.photos/id/312/640/480" }
                alt="user-pic" 
                style={{ height: '50px' }}
                />
              <p>
                {review.rating}
              </p>
              <p>{review.user.name ? review.user.name : 'booty wallace'}</p>
            </div>
            <p>{review.text}</p>
            {props.user.profile === review.user?._id ?
              <div id="delete-btn-restaurant">
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
      </div>
      :
        <h6 id="no-reviews">No reviews yet</h6>
      }
      
      <NavBarBot page='restrooms'/>
    </>
  );
}

export default RestroomDetails;