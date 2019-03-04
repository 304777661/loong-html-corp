import Axios from 'axios'
import { Toast } from 'vant'

Axios.defaults.baseURL = '/wx-loong-api'

// Axios响应拦截器 对返回码进行处理处理
Axios.interceptors.response.use(res => {
  if (res.status === 200 && res.data.rspCd === '00000') {
    return res.data.data || res.data
  }
  Toast(res.data.rspInf)
  return Promise.reject(res.data.rspInf)
}, err => {
  if (err.response) {
    switch (err.response.status) {
      case 502:
        Toast('服务器内部错误')
        break
      case 404:
        Toast('请求地址错误')
        break
      case 405:
        Toast('请求方式错误')
        break
      default:
        Toast('服务器繁忙')
        break
    }
  } else {
    Toast('网络错误')
  }
  return Promise.reject(err.response)
})
