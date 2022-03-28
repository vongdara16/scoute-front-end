import { useState, useRef, useEffect } from "react"

const AddParking = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    isSafe: false,
    isFree: false,
    lightQuality: 1,
    cleanliness: 1,
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


  const handleSubmit = evt => {
    evt.preventDefault()
    const parkingFormData = new FormData()
    parkingFormData.append('street', formData.street)
    parkingFormData.append('city', formData.city)
    parkingFormData.append('state', formData.state)
    parkingFormData.append('isSafe', formData.isSafe)
    parkingFormData.append('isFree', formData.isFree)
    parkingFormData.append('lightQuality', formData.lightQuality)
    parkingFormData.append('cleanliness', formData.cleanliness)
    parkingFormData.append('isCovered', formData.isCovered)
  }
  return (
    <>
      <div>add parking</div>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div className="form-group mb-1" >
          <label 
          htmlFor="stree-input" 
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
        <div className="form-group mb-1">
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
        <div className="form-group mb-1">
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
      </form>
    </>
    );
}

export default AddParking;