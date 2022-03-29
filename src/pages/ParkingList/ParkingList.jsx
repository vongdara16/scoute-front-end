import NavBarBot from "../../components/NavBarBot/NavBarBot";
import NavBarTopSearch from "../../components/NavBarTopSearch/NavBarTopSearch";
import ParkingCard from "../../components/ParkingCard/ParkingCard";
const Parkings = (props) => {
  return (
    <>
      <NavBarTopSearch />
      <h2 id='all-cards'>
            {props.parkinglots.map((parkinglot, idx) => 
              <ParkingCard key={idx} parkinglot={parkinglot} />
            )}
          </h2>
      <NavBarBot />
    </>
    );
}

export default Parkings;