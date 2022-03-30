import { Link } from "react-router-dom";

const ParkingCard = ({parkinglots}) => {
  const parkinglotsid = parkinglots._id ? parkinglots._id : '' 
  return ( 
    <>
    <div className="card" id="home-card">
    <Link to={parkinglotsid} key={parkinglots._Id} state={{parkinglots}}>
    <img 
      src=
        {parkinglots.photo ? (parkinglots.photo) : 'https://picsum.photos/id/398/640/480' } 
      alt="parkinglotPhoto"
      className="card-img-top"
    />
    <div>{parkinglots.city}</div>
    {parkinglots.isFree ? 
    <div>free</div>
    :
    <div>Fee</div>
    }
    </Link>
    </div>

    </>
  );
}

export default ParkingCard;