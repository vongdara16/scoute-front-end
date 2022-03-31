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
      <h1 id="parking-header" >Parking lots</h1>
      <div id='all-cards-parking'>
        <h2>
          {props.parkinglots.length ? 
            <div id="all-cards-parking-lot" >
              {props.parkinglots.map((parkinglot, idx) => 
                <ParkingCard key={idx} parkinglots={parkinglot} />
              )}
            </div>
          :
            <div id='else-message' >Please search by city name</div>
          }
        </h2>

      </div>
      <NavBarBot page='parkinglots'/>
    </>
  );
}

export default Parkinglots;
