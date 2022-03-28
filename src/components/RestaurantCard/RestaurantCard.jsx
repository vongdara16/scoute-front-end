import './RestaurantCard.css'
import { Link } from 'react-router-dom'

const RestaurantCard = ({restaurant}) => {
  return (  
    <>
      <div className="card" id="home-card">
        <Link to={restaurant.id} key={restaurant.id} state={{restaurant}}>
          <img 
            src={restaurant.image_url} 
            className="card-img-top"
            id="restaurant-picture"
            alt="..." 
          />
          <div 
          className="card-body" 
          title='restaurants'>
            <h5 
            id="link" 
            className="card-title">
              {restaurant.name}
            </h5>
            <div id='price-rating-distance' >
              {restaurant.price ?
              <span id='price-sign' >{restaurant.price}</span>
              :
              <i  id='no-price' className='material-icons' >money_off</i>
              }
              <span id='rating' >{restaurant.rating}</span>
              <span id='distance' >{(restaurant.distance/1609.34).toFixed(2)} mi</span>
            </div>
            <div>
              <span>
                {!!restaurant.display_phone ?
                <div>
                  <i id='phone-icon' className='material-icons'>phone</i>
                  <a href='tel:{restaurant.display_phone}'>{restaurant.display_phone}</a>
                </div>
                :
                  <div></div>
                }
              </span>
              <hr id="solid" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default RestaurantCard;