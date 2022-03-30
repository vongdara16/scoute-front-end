import axios from 'axios'
import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews/`

async function getRestaurantReviews(restaurantId) {
  // console.log('restaur Id service', restaurantId)
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

// function getAll() {
//   return fetch(BASE_URL, {
//     headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`
//     }
//   })
//   .then(res => res.json())
// }

function create(review) {
  console.log('review', review)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(review)
  })
  .then(res => res.json())
}

export {
  getRestaurantReviews,
  create,
  // getAll,
}