import axios from 'axios'

import storage from './storage'

const generateErrorText = (errorObject: any) => {
  const errorText = errorObject.response.data.error

  return Promise.reject(errorText)
}

const defaultHeaders = {}
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: defaultHeaders,
})

instance.interceptors.request.use(
  async (config) => {
    const token = await storage.getData('token')

    if (token) {
      config.headers['Authorization'] = token
    }

    return config
  },
  (error) => error,
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const errorStatus = error.response.status

    // handle 400 status error
    if (errorStatus === 400) {
      return generateErrorText(error)
    }
    if (errorStatus === 401) {
      return generateErrorText(error)
    }
    if (errorStatus === 403) {
      return generateErrorText(error)
    }

    return Promise.reject(error)
  },
)

export default instance
