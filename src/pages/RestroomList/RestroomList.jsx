import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
import RestroomCard from "../../components/RestroomCard/RestroomCard";

const Restrooms = (props) => {
  return (
    <>
      <NavBarTopSearch 
        user={props.user} 
        handleLogout={props.handleLogout}
        isFormInvalid={props.isFormInvalid}
      />
      <div >
        <div>This feature is only avaiable by agreeing to let us use your location.
          <button onClick={() => props.getLocation()}>Use Location</button>
        </div>
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
          <div>empty</div>
        }
      </h2>
      </div>
      <NavBarBot />
    </>
    );
}

export default Restrooms;