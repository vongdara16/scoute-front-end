import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import RestroomCard from "../../components/RestroomCard/RestroomCard";

const Restrooms = (props) => {
  return (
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
        getLocation={props.getLocation}
        page={props.page}
      />
      <div >
        <div>This feature is only avaiable by agreeing to let us use your location.</div>
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