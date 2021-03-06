import { Link } from "react-router-dom";
import './Home.css'
import NavBarTop from "../../components/NavBarTop/NavBarTop";

const Home = (props) => {

  return (  
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}  
        getLocation={props.getLocation}
        page={props.page}
        lat={props.lat}
        spinner={props.spinner}
      />
      <div className="card" id="home-card">
        <Link to="/restrooms">
          <img 
            src="https://i.imgur.com/pVyxL5P.jpg" 
            className="card-img-top"
            id="restroom-picture"
            alt="..." 
          />
          <div className="card-body" title='restrooms'>
            <h5 id="link" className="card-title">Find a Restroom</h5>
          </div>
        </Link>
      </div>
      <div className="card" id="home-card" >
        <Link to="/restaurants">
          <img 
            src="https://i.imgur.com/ElZeUe9.jpg" 
            className="card-img-top" 
            alt="..." 
          />
          <div className="card-body" title='restaurants'>
            <h5 id="link" className="card-title">Find a Restaurant</h5>
          </div>
        </Link>
      </div>
      <div className="card" id="home-card" >
        <Link to="/parkinglots">
          <img 
            src="https://i.imgur.com/81nAX8w.jpg" 
            className="card-img-top" 
            alt="..." 
          />
          <div className="card-body" title='parkinglots'>
            <h5 id="link" className="card-title">Find Parking</h5>
          </div>
        </Link>
      </div>
    </>
  );
}
 
export default Home;