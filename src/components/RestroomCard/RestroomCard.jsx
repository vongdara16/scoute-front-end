import { Link } from "react-router-dom";

const RestroomCard = ({restroom, lat, lng}) => {
  const restroomId = restroom.id
  
  function getDistance(lat1, lng1, lat2, lng2){
    let R = 6371
    let latDiff = deg2rad(lat2-lat1)
    let lngDiff = deg2rad(lng2-lng1)
    let a = 
    Math.sin(latDiff/2) * Math.sin(latDiff/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(lngDiff/2) * Math.sin(lngDiff/2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c
    return d
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  
  const distance = getDistance(lat, lng, restroom.latitude, restroom.longitude)
  console.log('this is distance',distance)
  return ( 
    <>
      <div className="card" id="home-card">
      <Link to={restroomId}>
          <img 
            src=
              {restroom.image_url ? restroom.image_url : restroom.photo ? restroom.photo : 'https://picsum.photos/id/398/640/480' } 
            alt="A happy puppy"
            className="card-img-top"
          />
          <div className="card-body" title='restrooms'>
            <h5 id="link" className="card-title">
              {restroom.name ? restroom.name : 'N/A' }
            </h5>
            <div id='distance' >
              <span id='distance' >{(distance/1.6).toFixed(2)} mi</span>
            </div>
          </div>
          </Link>
      </div>
    </>
  );
}

export default RestroomCard;