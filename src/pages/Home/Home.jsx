import { Link } from "react-router-dom";
import './Home.css'

const Home = (props) => {

  return (  
    <>
      <h1>Homies Page</h1>
      <div className="card" id="home-card">
        <Link to="/restrooms">
          <img 
            src="https://picsum.photos/id/398/640/480" 
            className="card-img-top" 
            alt="..." 
          />
          <div className="card-body" title='restrooms'>
            <h5 className="card-title">Find a Restroom</h5>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/restaurants">
          <img 
            src="https://picsum.photos/id/676/640/480" 
            className="card-img-top" 
            alt="..." 
          />
          <div className="card-body" title='restaurants'>
            <h5 className="card-title">Find a Restaurant</h5>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/parkinglots">
          <img 
            src="https://picsum.photos/id/648/640/480" 
            className="card-img-top" 
            alt="..." 
          />
          <div className="card-body" title='parkinglots'>
            <h5 className="card-title">Find Parking</h5>
          </div>
        </Link>
      </div>
    </>
  );
}
 
export default Home;