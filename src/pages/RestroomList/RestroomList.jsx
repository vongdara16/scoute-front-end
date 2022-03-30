import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
import RestroomCard from "../../components/RestroomCard/RestroomCard";

const Restrooms = (props) => {
  return (
    <>
      <NavBarTopSearch 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <div >
        <div>For optimal results, please allow us to use your location
          <button onClick={() => props.getLocation()}>Get Location</button>
        </div>
      </div>
      <div>
      <h2 id='all-cards'>
        {props.restrooms.data ? 
          <div>
            {props.restrooms.data.map((restroom, idx) => 
                  <RestroomCard key={idx} restroom={restroom} />
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