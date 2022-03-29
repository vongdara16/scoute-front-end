import { Link } from 'react-router-dom'
import NavBarTop from '../../components/NavBarTop/NavBarTop';
import NavBarBot from '../../components/NavBarBot/NavBarBot';
import { useState, useEffect, useRef } from 'react';


const AddRestaurant = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    phoneNumber: '',
    price: '',
    rating: ''
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		const restaurantFormData = new FormData()
		// restaurantFormData.append('photo', formData.photo)
    restaurantFormData.append('name', formData.name)
    restaurantFormData.append('street', formData.street)
    restaurantFormData.append('city', formData.city)
    restaurantFormData.append('state', formData.state)
    restaurantFormData.append('phoneNumber', formData.phoneNumber)
    restaurantFormData.append('price', formData.price)
    restaurantFormData.append('rating', formData.rating)
    props.handleAddRestaurant(formData)
    console.log(restaurantFormData)
    console.log(formData)
  }

	// const handleChangePhoto = evt => {
	// 	setFormData({...formData, photo: evt.target.files[0]})
	// }

  return (  
    <>
      <NavBarTop />
      <h1>add a restaurant!</h1>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='container'
      ref={formElement}
    >
      {/* <div className="form-group mb-1">
				<label htmlFor="photo-upload" className="form-label" id='inputGroup-sizing-default'>
				</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
			</div> */}
      <div className='input-group mb-1'>
        <label htmlFor="restaurant-name" className='input-group-text' id='inputGroup-sizing-default' >
          <i className='material-icons'>create</i>
        </label>
        <input
          className="form-control"
          aria-label="Sizing example input"
          type="text"
          autoComplete="off"
          id="restaurant-name"
          value={formData.name}
          name="name"
          onChange={handleChange}
          placeholder='Name of Restaurant'
          required
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="restaurant-street" className='input-group-text' id='inputGroup-sizing-default' >
        <i className='material-icons'>place</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="text"
          autoComplete="off"
          id="restaurant-street"
          value={formData.street}
          name="street"
          onChange={handleChange}
          placeholder='Street'
          required
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="restaurant-city" className='input-group-text' id='inputGroup-sizing-default' >
        <i className='material-icons'>place</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="text"
          autoComplete="off"
          id="restaurant-city"
          value={formData.city}
          name="city"
          onChange={handleChange}
          placeholder='City'
          required
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="restaurant-state" className='input-group-text' id='inputGroup-sizing-default' >
        <i className='material-icons'>place</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="text"
          autoComplete="off"
          id="restaurant-state"
          value={formData.state}
          name="state"
          onChange={handleChange}
          placeholder='State'
          required
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="restaurant-phoneNumber" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>phone</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="tel"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          maxLength={10}
          autoComplete="off"
          id="restaurant-phoneNumber"
          value={formData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          placeholder='Phone Number'
          required
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="restaurant-price" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>attach_money</i>
        </label>
        <select
          className='form-control'
          aria-label='Sizing example input'
          type="password"
          autoComplete="off"
          id="restaurant-price"
          value={formData.price}
          name="price"
          onChange={handleChange}
          placeholder='Price Rating in $'
          required
        >
          <option value="">-- Select A Price -- </option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="restaurant-rating" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>star_half</i>
        </label>
        <select
          className='form-control'
          aria-label='Sizing example input'
          type="password"
          autoComplete="off"
          id="restaurant-rating"
          value={formData.rating}
          name="rating"
          onChange={handleChange}
          placeholder='Restaurant Rating'
          required
        >
          <option value=""> -- Select A Rating -- </option>
          <option value="1">☆</option>
          <option value="2">☆☆</option>
          <option value="3">☆☆☆</option>
          <option value="4">☆☆☆☆</option>
          <option value="5">☆☆☆☆☆</option>
        </select>
      </div>
      <div id='sign-up-buttons'>
        <button 
          type='submit'
          disabled={!validForm} 
          className='btn btn-secondary btn-fluid' 
          id='sign-up-btn' >
          Add Restaurant
        </button>
        <Link to="/restaurants">
          <button className='btn btn-danger btn-fluid' >Cancel</button>
        </Link>
      </div>
    </form>
    <NavBarBot page='restaurants'/>
    </>
  );
}
 
export default AddRestaurant;