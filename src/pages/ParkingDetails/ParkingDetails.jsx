import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import './ParkingDetails.css'
const ParkingDetails = (props) => {
  const location = useLocation()
  const [parkinglotData, setParkinglotData] = useState(location.state.parkinglots)
  console.log(parkinglotData.author)
  console.log(props.user)
  return ( 
    <>
    <NavBarTop 
      user={props.user} 
      handleLogout={props.handleLogout}
    />
    <div id="all-parking-details" >
      <h1 id="parking-header" 
      className="display-2">
        {parkinglotData.city}
      </h1>
      <img 
      className="card parking-card"
        alt="restaurant-img" 
        style={{width : '100%'}}
        src={
          parkinglotData.photo ? parkinglotData.photo 
          : 
          'https://i.imgur.com/qHOcJde.png' 
        } 
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="material-icons">
            delete
          </i>
          <span>
            Cleanliness: {parkinglotData.cleanliness}
          </span>  
        </li>
        <li className="list-group-item">
          {parkinglotData.isSafe ?
          <div>
            <i className="material-icons">
              local_police
            </i>
            <span> This Parkinglot is Safe</span>
          </div>
          :
          <div>
            <i className="material-icons">
              local_police
            </i>
            <span> Not Safe</span>
          </div>
          }
        </li>
          <li className="list-group-item">
            {parkinglotData.isPaved ?
            <div>
              <i className="material-icons">
                terrain
              </i>
              <span> This Parkinglot is Paved</span>
            </div>
            :
            <div>
              <i className="material-icons">
                terrain
              </i>
              <span>This Parkinglot is Not Paved</span>
            </div>
            }
          </li>
          <li className="list-group-item">
            {parkinglotData.isCovered ?
            <div>
              <i className="material-icons">
                garage
              </i>
              <span>This Parkinglot is Covered</span>
            </div>
            :
            <div>
              <i className="material-icons">
                garage
              </i>
              <span> This Parkinglot is Not Covered</span>
            </div>
            }
          </li>
          <li className="list-group-item">
            <i className="material-icons">
              light
            </i>
            <span> LightQuality: {parkinglotData.lightQuality}</span>
          </li>
          <li className="list-group-item">
            {parkinglotData.isFree ?
            <div>
              <i className="material-icons">
                attach_money
              </i>
              <span> This Parkinglot is Free</span>
            </div>
            :
            <div>
              <i className="material-icons">
                attach_money
              </i>
              <span> This Parkinglot Requires a Fee</span>
            </div>
            }
          </li>
      </ul>
    <div>
      {props.user.profile === parkinglotData?.author ?
      <div id="parking-btns">
        <button className="btn btn-sm btn-danger m-left"
        onClick={() => props.handleDeleteParking(parkinglotData._id)}>Delete parking</button> <br></br>
        <Link
        to={`/parkinglots/${parkinglotData._id}/edit`}
        state={{parkinglotData}}
        >
          Edit Parking lot
        </Link>
        </div>
        :
        <></>
      }
      </div>
    </div>
    <NavBarBot />
    </>
  );
}

export default ParkingDetails;