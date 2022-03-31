import { Link } from "react-router-dom";

const RestroomCard = ({restroom, lat, lng}) => {
  const restroomId = restroom.id
  
  return ( 
    <>
      <div className="card" id="home-card">
        <Link to={`/restrooms/${restroomId}`} key={restroom.id} state={{restroom}}>
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
              <span id='distance' >{(restroom.distance).toFixed(2)} mi</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default RestroomCard;