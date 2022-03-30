import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
import ParkingCard from "../../components/ParkingCard/ParkingCard";
import './ParkingList.css'
const Parkinglots = (props) => {
  return (
    <>
      <NavBarTopSearch 
        handleChange={props.handleChangeParking} 
        handleSubmit={props.handleSubmitParking} 
        isFormInvalid={props.isFormInvalid} 
        search={props.search}
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <h2 id='all-cards'>
        {/* {props.parkinglots[0]} */}
        {props.parkinglots.length ? 
          <div>
            {props.parkinglots.map((parkinglot, idx) => 
                  <ParkingCard key={idx} parkinglots={parkinglot} />
                )}
          </div>
        :
          <div id='else-message' >Please search by city name</div>
        }
      </h2>
      <NavBarBot page='parkinglots'/>
    </>
  );
}

export default Parkinglots;
