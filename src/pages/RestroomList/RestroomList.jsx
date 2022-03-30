import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
const Restrooms = (props) => {
  return (
    <>
      <NavBarTopSearch 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <div>This is a list of restrooms dawg</div>
      <div >
        <button onClick={() => props.getLocation()}>Get Location</button>
        <p>Latitude: {console.log(props.lat)}</p>
        <p>Longitude: {console.log(props.lng)}</p>
      </div>
      <NavBarBot />
    </>
    );
}

export default Restrooms;