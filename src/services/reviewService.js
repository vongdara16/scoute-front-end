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

function create(review) {
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

function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

async function getRestroomReviews(restroomId) {
  const finalURL = `${BASE_URL}restrooms/${restroomId}`
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
  create,
  deleteOne,
  getRestroomReviews
}