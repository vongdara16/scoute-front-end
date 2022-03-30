import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
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
      <NavBarBot />
    </>
    );
}

export default Restrooms;