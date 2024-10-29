import axios from 'axios'
import envConfig from 'configs/env/index'
import handleAuthLocalStorage from 'services/auth-local-storage-service'
import { HEADER } from 'shared/constants'

const baseurl = envConfig.ENDPOINT_API

const axiosService = axios.create({
  baseURL: baseurl,
  timeout: 5000,
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
  headers: {
    'content-type': 'application/json',
  },
})

const { getToken } = handleAuthLocalStorage()

axiosService.interceptors.request.use(
  async (config) => {
    const token = await getToken()

    if (token) {
      config.headers[HEADER.AUTHORIZATION] = `Bearer ${token?.accessToken}`
    }

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

axiosService.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  async (error) => {
    const { removeToken } = handleAuthLocalStorage();

    const status = error?.status;
    const errorData: unknown = error?.['response']?.['data']

    switch (status) {
      case 401:
        removeToken()
        window.location.reload()
      break;

      default:
        return Promise.reject(error)
    }

    return errorData

  }
)

export default axiosService
