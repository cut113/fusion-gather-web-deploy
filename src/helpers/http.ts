import axios, { AxiosInstance } from 'axios'

// export default function requestApi(endpoint, method, body, responseType = 'json') {
//   const headers = {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   }
//   const instance = axios.create({ headers })

//   return instance.request({
//     method: method,
//     baseURL: `${process.env.REACT_APP_API_URL}${endpoint}`,
//     data: body,
//     responseType: responseType
//   })
// }

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const http = new Http().instance

export default http
