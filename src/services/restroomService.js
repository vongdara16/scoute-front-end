import axios from 'axios'
import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/restrooms/`

async function getAllRestrooms(lat, lng) {
  const finalURL = BASE_URL+lat+lng
  const result = await axios({
    url: finalURL,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return result
}