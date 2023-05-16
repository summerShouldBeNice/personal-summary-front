// 封装axios
import axios from 'axios'
import { BASE_URL } from '@/config/constants'

axios.defaults.baseURL = BASE_URL; // 设置默认请求路径
axios.defaults.timeout = 1000 *  60 * 60; // 超时时间
axios.defaults.headers["Content-Type"] = "application/json"; // 设置默认请求头
axios.defaults.withCredentials = true; // 跨域

/**
 * 请求,响应拦截器
 * @param axiosInstance
 */
function addInterceptor(axiosInstance) {
  axiosInstance.interceptors.request.use(config => {
    let token = getItem(USER_TOKEN_KEY)
  })
}


