import { Link } from "react-router-dom";
import './ParkingCard.css'

const ParkingCard = ({parkinglots}) => {
  const parkinglotsid = parkinglots._id ? parkinglots._id : '' 
  return ( 
    <>
    <div className="card parking-card" id="home-card">
    <Link to={parkinglotsid} key={parkinglots._Id} state={{parkinglots}}>
    <img 
      src=
        {parkinglots.photo ? (parkinglots.photo) : 'https://picsum.photos/id/398/640/480' } 
      alt="parkinglotPhoto"
      className="card-img-top"
    />
    {/* <div>{parkinglots.city}</div> */}
    {parkinglots.isFree ? 
    <div className="free-city">
      <div>free</div>
      <div>{parkinglots.city}</div>
    </div>
    :
    <div className="free-city">
      <div>Fee</div>
      <div>{parkinglots.city}</div>
    </div>
    }
    <hr id="solid" />
    </Link>
    </div>

    </>
  );
}

export default ParkingCard;