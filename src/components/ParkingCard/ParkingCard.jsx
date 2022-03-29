const ParkingCard = ({parkinglot}) => {
  return ( 
    <>
    <div className="card" id="home-card">
    <img 
      src=
        {parkinglot.photo ? (parkinglot.photo) : 'https://picsum.photos/id/398/640/480' } 
      alt="parkinglotPhoto"
      className="card-img-top"
    />
    <div>{parkinglot.city}</div>
    </div>
    </>
  );
}
 
export default ParkingCard;