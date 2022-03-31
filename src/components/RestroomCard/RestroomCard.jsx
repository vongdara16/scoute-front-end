import { Link } from "react-router-dom";
import './RestroomCard.css'

const RestroomCard = ({restroom, lat, lng}) => {
  const restroomId = restroom.id
  console.log(restroom)
  
  return ( 
    <>
      <div 
        className="card" 
        id="home-card">
        <Link 
          to={`/restrooms/${restroomId}`} 
          key={restroom.id} 
          state={{restroom}}>
          <img 
            src=
              {restroom.image_url ? restroom.image_url : restroom.photo ? restroom.photo : 'https://picsum.photos/id/398/640/480' } 
            alt="A happy puppy"
            className="card-img-top"
          />
          <div 
            className="card-body" 
            title='restrooms'>
            <h5 
              id="link" 
              className="card-title">
              {restroom.name ? restroom.name : 'N/A' }
            </h5>
            <div id="uni-change-acc">
              {restroom.unisex ? 
                <i
                  id='rr-uni' 
                  className='material-icons'>
                    wc
                </i>
              :
                <i
                  id='not-avail' 
                  className='material-icons'>
                  wc
                </i>
              }
              {restroom.changing_table ? 
                <i
                  id='rr-uni' 
                  className='material-icons'>
                  baby_changing_station
                </i>
              :
                <i
                  id='not-avail' 
                  className='material-icons'>
                  baby_changing_station
                </i>
              }
              {restroom.accessible ? 
                <i
                  id='rr-uni' 
                  className='material-icons'>
                  accessible
                </i>
              :
                <i
                  id='not-avail' 
                  className='material-icons'>
                  not_accessible
                </i>
              }
            </div>
            <div id='distance'>
              <span id='distance'>
                {(restroom.distance).toFixed(2)} mi
              </span>
              <hr id="solid" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default RestroomCard;