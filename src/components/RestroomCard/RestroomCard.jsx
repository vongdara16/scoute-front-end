import { Link } from "react-router-dom";

const RestroomCard = ({restroom}) => {
  return ( 
    <>
      <div className="card" id="home-card">
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
              <span id='distance' >{(restroom.distance/1609.34).toFixed(2)} mi</span>
            </div>
          </div>
      </div>
    </>
  );
}

export default RestroomCard;