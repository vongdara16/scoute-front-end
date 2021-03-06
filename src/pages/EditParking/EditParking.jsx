import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import NavBarTop from "../../components/NavBarTop/NavBarTop"
import NavBarBot from "../../components/NavBarBot/NavBarBot"

const EditParking = (props) => {
  const location = useLocation()
  const formElement = useRef()
  const [validForm, setValidForm] = useState(true)
  const [formData, setFormData] = useState(location.state.parkinglotData)
  const parkingid = location.state.parkinglotData._id

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChangePhoto = evt => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleToggle = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.checked})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const parkingFormData = new FormData()
    parkingFormData.append('photo', formData.photo)
    parkingFormData.append('street', formData.street)
    parkingFormData.append('isPaved', formData.isPaved)
    parkingFormData.append('city', formData.city)
    parkingFormData.append('state', formData.state)
    parkingFormData.append('isSafe', formData.isSafe)
    parkingFormData.append('isFree', formData.isFree)
    parkingFormData.append('lightQuality', formData.lightQuality)
    parkingFormData.append('cleanliness', formData.cleanliness)
    parkingFormData.append('isCovered', formData.isCovered)
    props.handleUpdateParking(parkingFormData, parkingid)
  }
  return (
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <div>Edit Parking</div>
      <form 
        autoComplete="off" 
        ref={formElement} 
        onSubmit={handleSubmit}
      >
      <div className="form-group mb-3">
				<label        
          htmlFor="photo-upload" 
          className="form-label" 
          id='inputGroup-sizing-default'
        >
				</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
			</div>
        <div className="form-group mb-3" >
          <label 
          htmlFor="street-input" 
          className="form-label">
            Street
          </label>
          <input 
          type="text"
          className="form-control"
          id="street-input"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group mb-3">
          <label 
          htmlFor="city-input" 
          className="form-label">
            City
          </label>
          <input
          type="text"
          className="form-control"
          id="city-input"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          />
        </div>
        <div className="form-group mb-3">
          <label 
          htmlFor="state-input"
          className="form-label">
            State
          </label>
          <input 
          type="text"
          className="form-control"
          id="state-input"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          />
        </div>
        <div className="form-check form-switch">
          <label 
          htmlFor="isSafe-input"
          className="form-check-label">
            isSafe?
          </label>
          <input 
          type="checkbox"
          className="form-check-input"
          role='switch'
          id="isSafe-input"
          name="isSafe"
          value={formData.isSafe}
          checked={formData.isSafe}
          onChange={handleToggle}
          />
        </div>
        <div className="form-check form-switch">
          <label 
          htmlFor="isPaved-input"
          className="form-check-label">
            isSafe?
          </label>
          <input 
          type="checkbox"
          className="form-check-input"
          role='switch'
          id="isPaved-input"
          name="isPaved"
          value={formData.isPaved}
          checked={formData.isPaved}
          onChange={handleToggle}
          />
        </div>
        <div className="form-check form-switch">
          <label 
          htmlFor="flexSwitchCheckDefault"
          className="form-check-label">
            isFree?
          </label>
          <input
          name="isFree" 
          type="checkbox"
          className="form-check-input"
          role='switch'
          id="isFree-input"
          value={formData.isFree}
          checked={formData.isFree}
          onChange={handleToggle}
          />
        </div>
        <div className="form-check form-switch">
          <label 
          htmlFor="isCovered-input"
          className="form-check-label">
            isCovered?
          </label>
          <input 
          name="isCovered"
          type="checkbox"
          className="form-check-input"
          role="switch"
          id="isCovered-input"
          value={formData.isCovered}
          checked={formData.isCovered}
          onChange={handleToggle}
          />
        </div>
        <label 
        htmlFor="lighQuality-input"
        className="form-label">
          Light Quality
        </label>
        <input
        type="range"
        className="form-range"
        name="lightQuality"
        min={1}
        max={5}
        step={0.5}
        id="lighQuality-input"
        values={formData.lightQuality}
        onChange={handleChange}
        required
        />
        <label 
        htmlFor="cleanliness-input"
        className="form-label">
          Cleanliness
        </label>
        <input
        type="range"
        name="cleanliness"
        className="form-range"
        min={1}
        max={5}
        step={0.5}
        id="cleanliness-input"
        values={formData.cleanliness}
        onChange={handleChange}
        required
        />
        <div className="d-grid">
          <button
          type="submit"
          className="btn btn-primary btn-fluid"
          disabled={!validForm}>
            Save Parkinglot
          </button>
          <div className="d-grid">
            <Link
              to="/parkinglots"
              className="btn btn-danger btn-fluid"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
      <NavBarBot />
    </>
    );
}

export default EditParking;