import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const ParkingDetails = (props) => {
  const location = useLocation()
  const [parkinglotData, setParkinglotData] = useState(location.state.parkinglots)
  console.log(parkinglotData)
  console.log(props.user.profile)
  console.log(parkinglotData.author)
  return ( 
    <>
    <div>details</div>
    <div>{parkinglotData.city}</div>
    {/* {if (props.user === parkinglotData.author) {
      <div>owner</div>
    }} */}
    <div>
      {props.user.profile === parkinglotData.author ?
      <div>youre the owner</div>
      :
      <div>you are not the owner</div>
      }
    </div>

    </>
  );
}
 
export default ParkingDetails;