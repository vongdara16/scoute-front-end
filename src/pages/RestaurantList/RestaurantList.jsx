import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import NavBarBot from '../../components/NavBarBot/NavBarBot';
import NavBarTopSearch from '../../components/NavBarTopSearch/NavBarTopSearch';
import './RestaurantList.css'

const Restaurants = (props) => {
  return ( 
    <>
      <NavBarTopSearch 
        handleChange={props.handleChangeRestaurant} 
        handleSubmit={props.handleSubmitRestaurant} 
        isFormInvalid={props.isFormInvalid} 
        search={props.search}
      />
      <h1 id='restaurant-header' >Restaurants</h1>
      <div>
        {!props.restaurants.length ?
        <div id='no-rest'> 
          <h2>No Restaurants, Please enter your location in the search bar above.</h2>
          <small id='small-text'>Or allow access to your location</small>
        </div>
        :
          <h2 id='all-cards'>
            {props.restaurants.map((restaurant, idx) => 
              <RestaurantCard key={idx} restaurant={restaurant} />
            )}
          </h2>
        }
      </div>
      <NavBarBot page='restaurants'/>
    </>
  );
}

export default Restaurants;