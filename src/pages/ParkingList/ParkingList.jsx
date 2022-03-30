import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
import ParkingCard from "../../components/ParkingCard/ParkingCard";
const Parkinglots = (props) => {
  console.log(props.parkinglots)
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
          <div>empty</div>
        }
      </h2>
      <NavBarBot page='parkinglots'/>
    </>
  );
}

export default Parkinglots;