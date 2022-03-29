import axios from 'axios'
import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/restaurants/`


function create(restaurant) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: restaurant
  })
  .then(res => res.json())
}

async function getAll(search) {
  const finalURL = BASE_URL+search
  const result = await axios({
    url: finalURL,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return result.data.restaurants
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

function update(restaurant) {
  return fetch(`${BASE_URL}/${restaurant.get('_id')}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: restaurant
  })
  .then(res => res.json())
}

//^^ MAY NOT NEED THIS UPDATE FUNCTION

export {
  create,
  getAll,
  deleteOne,
  update
}