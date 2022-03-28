import axios from 'axios'
import * as tokenService from './tokenService'
const RESTAURANT_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/restaurants/`

async function getRestaurantReviews(restaurantID) {
  const finalURL = RESTAURANT_URL+restaurantID
  const result = await axios({
    url: finalURL,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  console.log(result)
}

export {
  getRestaurantReviews,
}