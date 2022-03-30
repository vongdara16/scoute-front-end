import { useState, useEffect, useRef } from 'react';


const AddReviewForm = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    text: '',
    rating: '',
    yelprestaurant: props.restaurant.id
    // restaurant: props.restaurant.id, 
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
    // setFormData({restaurant: props.restaurant.id})
    // console.log(formData) 
  }

  // const handleSubmit = evt => {
  //   evt.preventDefault()
	// 	const reviewFormData = new FormData()
	// 	reviewFormData.append('content', formData.content)
  //   reviewFormData.append('rating', formData.rating)
  //   // console.log(props.restaurant.id);
  //   // setFormData({...formData, restaurant: props.restaurant.id})
  //   reviewFormData.append('restaurant', formData.restaurant)
  //   props.handleAddReview(reviewFormData)
  //   // console.log(formData);
  //   for(let val of reviewFormData) {
  //     console.log(val)
  //   }
  // }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddReview(formData)
  }

  return (  
    <>
        <label htmlFor="add-review-btn" style={{fontSize: '2.0rem'}}>
          Add Review
        </label>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='add-review-btn'>
        <i className='material-icons top-search-icon '>add</i>
        </button>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className='d-flex'
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
            <div className='input-group mb-1'>
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