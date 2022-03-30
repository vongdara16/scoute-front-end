import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const ParkingDetails = (props) => {
  const location = useLocation()
  const [parkinglotData, setParkinglotData] = useState(location.state.parkinglots)
  console.log(parkinglotData)
  console.log(props.user.profile)
  console.log(parkinglotData._id)
  return ( 
    <>
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
        >Edit Parking lot</Link>
      </div>
      :
      <div>you are not the owner</div>
      }
    </div>
    </>
  );
}

export default ParkingDetails;