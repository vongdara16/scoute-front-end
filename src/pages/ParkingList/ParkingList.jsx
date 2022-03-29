import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
import ParkingCard from "../../components/ParkingCard/ParkingCard";
const Parkings = (props) => {
  console.log(props.parkinglots)
  return (
    <>
      <NavBarTopSearch 
        handleChange={props.handleChangeParking} 
        handleSubmit={props.handleSubmitParking} 
        isFormInvalid={props.isFormInvalid} 
        search={props.search}
      />
      <h2 id='all-cards'>
            {props.parkinglots.map((parkinglot, idx) => 
              <ParkingCard key={idx} parkinglots={parkinglot} />
            )}
          </h2>
      <NavBarBot page='parkinglots'/>
    </>
  );
}

export default Parkings;