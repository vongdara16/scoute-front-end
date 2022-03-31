import { useState, useEffect, useRef } from 'react';
import './AddReviewForm.css'


const AddReviewForm = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    text: '',
    rating: '',
    yelprestaurant: props.restaurant ? (props.restaurant.id ? props.restaurant.id : '') : '',
    restaurant: props.restaurant ? (props.restaurant._id ? props.restaurant._id : '') : '',
    restroomId: props.restroom ? (props.restroom.id ? props.restroom.id : '') : '', 
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddReview(formData)
  }

  return (  
    <>
      <label htmlFor="add-review-btn" style={{fontSize: '1.5rem'}}>
        Add Review
      </label>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation" 
        id='add-review-btn'
      >
        <i className='material-icons top-search-icon '>add</i>
      </button>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='d-flex container-fluid'
        ref={formElement}
      >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <label htmlFor="review-text">
            Review Content
          </label>
          <textarea 
            className="form-control me-2" 
            type="text" 
            aria-label="Search"
            placeholder="Enter Review" 
            id='review-text'
            value={formData.text}
            name='text'
            onChange={handleChange}
            required
          />
          <div className='input-group mb-1' id='review-form-specific'>
            <label htmlFor="restaurant-review-rating" className='input-group-text' id='inputGroup-sizing-default'>
            <i className='material-icons'>star_half</i>
            </label>
            <select
              className='form-control'
              aria-label='Sizing example input'
              type="text"
              id="restaurant-review-rating"
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
          <button 
            className="btn btn-outline-success" 
            type="submit"
            disabled={!validForm}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddReviewForm;