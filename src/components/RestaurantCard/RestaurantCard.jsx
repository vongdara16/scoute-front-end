import './RestaurantCard.css'
import { Link } from 'react-router-dom'

const RestaurantCard = ({restaurant}) => {
  return (  
    <>
      <div className="card" id="home-card">
        <Link to="/restaurants/idplaceholder" key={restaurant.id} state={{restaurant}}>
          <img 
            src="https://picsum.photos/id/75/640/480" 
            className="card-img-top"
            id="restaurant-picture"
            alt="..." 
          />
          <div className="card-body" title='restrooms'>
            <h5 id="link" className="card-title">{restaurant.name}</h5>
            <span>{restaurant.distance} yeets away</span>
            <div>
              <span>{restaurant.price} </span>
              <span>
                <i id='' className='material-icons'>phone</i>
                {restaurant.phone}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
    // <div>
    //   <h4>This is a restaurant card</h4>
    //   {console.log(props.restaurant)}
    // </div>
  );
}
 
export default RestaurantCard;