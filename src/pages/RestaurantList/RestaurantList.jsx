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
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <h1 id='restaurant-header' >Restaurants</h1>
      <div>
        {!props.restaurants.length ?
          <div id='no-rest'> 
            <h6>Please enter your location or allow us to use your location</h6>
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