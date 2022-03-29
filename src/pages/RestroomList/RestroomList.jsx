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
      <p>
        dlsangio;ufadbjknfovka
      </p>
      <NavBarBot />
    </>
    );
}
 
export default Restrooms;