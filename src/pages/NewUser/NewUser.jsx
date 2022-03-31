import { Link } from "react-router-dom";

const NewUser = (props) => {
  return (  
    <>
    <h1>Getting started with Scoute</h1>
    <hr id="solid" />
    <p>You will initially be greeted by our home page where you will see the options to search for restaurants, restrooms, or parking lots</p>
    <p>On the top of the home page you will see two icons
      <i className="material-icons">person</i>: Profile icon where you can log out of Scoute.
      <br></br>
      <i className="material-icons">place</i>: Location icon to allow access to you location for best experience (only available for restrooms and restaurants)
    </p>
    <hr id="solid" />
    <h3>Restaurants:</h3>
    <p>If you choose to search for restaurants and have selected to use your current location, The closest 20 restaurants will automatically be populated for you. If you choose to not use your location you can use the search bar located at the top right of the screen <i className="material-icons">search</i>
    you can then select a restaurant to view further details and see reviews.
    </p>
    <hr id="solid" />
    <h3>Restrooms:</h3>
    <p>Restrooms is only available if you have selected to use your current location and will automatically populate upon reaching the restrooms page.
    </p>
    <hr id="solid" />
    <h3>Parkinglots:</h3>
    <p>Location services are not available for parkinglots, however you can search by city in the search bar at the top of the screen.
    </p>
    <h4>Icon Key:</h4>
    <p>
    <i className="material-icons">person</i>: Profile
    </p>
    <p>
      <i className="material-icons">place</i>: Location services
    </p>
    <p>
      <i className="material-icons">home</i>: Home Page
    </p>
    <p>
      <i className="material-icons">local_parking</i>: Parkinglots
    </p>
    <p>
      <i className="material-icons">restaurant</i>: Restaurants
    </p>
    <p>
      <i className="material-icons">wc</i>: Restrooms
    </p>
    <p>
      <i className="material-icons">add</i>: Add a parkinglot or restaurant
    </p>
    <Link to='/home'>
      <button>Done</button>
    </Link>
    </>
    
  );
}

export default NewUser;