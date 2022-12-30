/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 12:06:42
 * @LastEditTime: 2022-12-28 12:10:28
 */
import { BASE_URL, TIME_OUT } from './config'
import MYRequest from './request'

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
  }
})

export default myRequest
