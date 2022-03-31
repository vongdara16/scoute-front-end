import { useState, useRef, useEffect } from "react"
import NavBarTop from "../../components/NavBarTop/NavBarTop"
import NavBarBot from "../../components/NavBarBot/NavBarBot"
import './AddParking.css'
const AddParking = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    isSafe: false,
    isFree: false,
    isPaved: false,
    lightQuality: '1',
    cleanliness: '1',
    isCovered: false
  })

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
    props.handleAddParking(parkingFormData)
  }
  return (
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <div id="whole-form" >
      <h1 id="parking-header" 
      className="display-2">
        Add a Parkinglot
      </h1>
        <form 
          autoComplete="off" 
          ref={formElement} 
          onSubmit={handleSubmit}
          className='container flex-sm-column'
        >
        <div className="input-group input-group-sm mb-1">
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
        <div className='input-group input-group-sm mb-1'>
        <label htmlFor="street-input" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>signpost</i>
        </label>
            <input 
            type="text"
            aria-label='Sizing example input'
            className="form-control"
            id="street-input"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            required
          />
          </div>
          <div className='input-group input-group-sm mb-1'>
        <label htmlFor="city-input" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>location_city</i>
        </label>
            <input
            type="text"
            aria-label='Sizing example input'
            className="form-control"
            id="city-input"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            />
          </div>
          <div className='input-group input-group-sm mb-1'>
        <label htmlFor="state-input" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>place</i>
        </label>
            <input 
            type="text"
            className="form-control"
            aria-label='Sizing example input'
            id="state-input"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
            />
          </div>
          <div className="form-check form-switch">
            <label 
            htmlFor="isSafe-input"
            className="form-check-label">
              Safe?
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
              Paved?
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
              Free?
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
          <div className="form-check form-switch" id="isCovered">
            <label 
            htmlFor="isCovered-input"
            className="form-check-label">
              Covered?
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
          <hr id="solid" />
          <label 
          htmlFor="lighQuality-input"
          className="form-label">
            Light Quality (1-5)
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
          <hr id="solid" />
          <label 
          htmlFor="cleanliness-input"
          className="form-label">
            Cleanliness (1-5)
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
              Add Parkinglot
            </button>
          </div>
        </form>
      </div>
      <NavBarBot />
    </>
    );
}

export default AddParking;