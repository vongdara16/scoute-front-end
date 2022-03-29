const ParkingCard = ({parkinglots}) => {
  return ( 
    <>
    <div className="card" id="home-card">
    <img 
      src=
        {parkinglots.photo ? (parkinglots.photo) : 'https://picsum.photos/id/398/640/480' } 
      alt="parkinglotPhoto"
      className="card-img-top"
    />
    <div>{parkinglots.city}</div>
    </div>
    </>
  );
}
 
export default ParkingCard;