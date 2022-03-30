import NavBarTop from "../../components/NavBarTop/NavBarTop";
import NavBarBot from "../../components/NavBarBot/NavBarBot";
import { Link, useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react';



const AddReview = (props) => {
  const location = useLocation()
  console.log(location.state.restaurantData)
  const restaurant = location.state.restaurantData
  const formElement = useRef()

  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    content: '',
    rating: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		const reviewFormData = new FormData()
		reviewFormData.append('content', formData.content)
    reviewFormData.append('rating', formData.rating)
    props.handleAddReview(reviewFormData)   
  }


  return (  
    <>
      <NavBarTop 
        user={props.user} 
        handleLogout={props.handleLogout}
      />
      <h1>this is the add review page</h1>
      <div>
        <div>
          <h3>Add a review to {restaurant.name}</h3>
          <img src={restaurant.image_url ? restaurant.image_url : restaurant.photo ? restaurant.photo : 'https://picsum.photos/id/398/640/480' } alt="restaurant-img" style={{width : '100%'}}/>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className='container'
          ref={formElement}
        >
          <div>
            <label htmlFor="restaurant-review">
              Review Content
            </label>
            <textarea name="content" id="restaurant-review" cols="30" rows="10"></textarea>
            <div className='input-group mb-1'>
              <label htmlFor="restaurant-review-rating" className='input-group-text' id='inputGroup-sizing-default'>
              <i className='material-icons'>star_half</i>
              </label>
              <select
                className='form-control'
                aria-label='Sizing example input'
                type="text"
                // autoComplete="off"
                id="restaurant-review-rating"
                // value={formData.rating}
                name="rating"
                // onChange={handleChange}
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
          </div>
          <div id='sign-up-buttons'>
            <button 
              type='submit'
              // disabled={!validForm} 
              className='btn btn-secondary btn-fluid' 
              id='sign-up-btn' >
              Add Review
            </button>
            <Link to={`/restaurants/${restaurant._id}`} state={{restaurant}}>
              <button className='btn btn-danger btn-fluid' >Cancel</button>
            </Link>
          </div>
        </form>
      </div>
      <NavBarBot />
    </>
  );
}
 
export default AddReview;