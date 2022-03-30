import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import './ParkingDetails.css'
const ParkingDetails = (props) => {
  const location = useLocation()
  const [parkinglotData, setParkinglotData] = useState(location.state.parkinglots)
  return ( 
    <>
    <NavBarTop 
      user={props.user} 
      handleLogout={props.handleLogout}
    />
    <div id="park-details">
      <div>details</div>
      <h2>{parkinglotData.city}</h2>
      <img 
        alt="restaurant-img" style={{width : '100%'}}
      src={
          parkinglotData.image ? parkinglotData.image 
          : 
          'https://picsum.photos/id/398/640/480' 
        } 
      />
      <div>
        <i className="material-icons">delete</i>
        {parkinglotData.cleanliness}
      </div>
      <div>
        <i className="material-icons">local_police</i>
        {parkinglotData.isSafe ?
        <p>Safe</p>
        :
        <p>Not Safe</p>
        }
      </div>
    
    <div>
      <div>
        <i className="material-icons" >terrain</i>
        {parkinglotData.isPaved ? 
        <p>is Paved</p>
        :
        <p>is not paved</p>
        }
        <i className="material-icons">garage</i>
        {parkinglotData.isCovered ?
        <p>Covered Parking</p>
        :
        <p>No Covered Parking</p>
        }
      </div>
    </div>
    <div>
      <div>
        <i className="material-icons">light</i>
        {parkinglotData.lightQuality}
        <i className="material-icons">attach_money</i>
        <div>
        {parkinglotData.isFree ?
        <p>Free to park</p>
        :
        <p>Requires a fee</p>
        }
        </div>
      </div>
    </div>
    <div>
      {props.user.profile === parkinglotData?.author ?
      <div>
        <button className="btn btn-sm btn-danger m-left"
        onClick={() => props.handleDeleteParking(parkinglotData._id)}>Delete parking</button>
        <Link
        to={`/parkinglots/${parkinglotData._id}/edit`}
        state={{parkinglotData}}
        >
          Edit Parking lot
        </Link>
      </div>
      :
      <div>you are not the owner</div>
      }
    </div>
    </div>
    <NavBarBot />
    </>
  );
}

export default ParkingDetails;