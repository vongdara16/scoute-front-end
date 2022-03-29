import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/parkinglots/`

function create(parking) {
  console.log('this is parking', parking)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: parking
  })
  .then(res => res.json())
}

function getAll(search) {
  return fetch(BASE_URL+search, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers:{
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

function update(parking) {
  return fetch(`${BASE_URL}/${parking.get('_id')}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: parking
  })
  .then(res => res.json())
}

export {
  create,
  getAll,
  deleteOne,
  update
}