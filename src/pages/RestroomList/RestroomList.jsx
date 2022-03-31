import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import RestroomCard from "../../components/RestroomCard/RestroomCard";
import './RestroomList.css'

const Restrooms = (props) => {
  return (
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
        getLocation={props.getLocation}
        page={props.page}
        lat={props.lat}
        spinner={props.spinner}
      />
        <div>
          {props.restrooms.data ? 
            <h2 id="rr-header">Restrooms</h2>
          :
            <div id="rr-welc-msg">
              Please allow us to use your location to generate Restrooms
            </div>
          }
        </div>
        <div>
        <h2 id='all-cards'>
          {props.restrooms.data ? 
            <div>
              {props.restrooms.data.map((restroom, idx) => 
                  <RestroomCard key={idx} restroom={restroom} lat={props.lat} lng={props.lng} />
                )}
            </div>
          :
            <p id="no-rr">No Restrooms Yet</p>
          }
        </h2>
        </div>

      <NavBarBot />
    </>
    );
}

export default Restrooms;