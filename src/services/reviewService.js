import axios from 'axios'
import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews/`

async function getRestaurantReviews(restaurantId) {
  const finalURL = BASE_URL+restaurantId
  const result = await axios({
    url: finalURL,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return result.data.reviews
}

export {
  getRestaurantReviews,
}