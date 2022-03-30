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
    <div>details</div>
    <h2>{parkinglotData.city}</h2>
    <img src={parkinglotData.photo} alt="parkingpic" className="card-img-top" />
    <div>clean,safe</div>
    <div>paved,covered</div>
    <div>lighting,free</div>
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
    <NavBarBot />
    </>
  );
}

export default ParkingDetails;