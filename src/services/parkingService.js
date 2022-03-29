import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/parkinglots`

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

export {
  create
}