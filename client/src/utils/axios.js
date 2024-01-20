import axios from 'axios'
import { clearStore } from '../features/user/userSlice'

const customeFetch = axios.create({
  baseURL: '/api/v1',
})

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customeFetch
