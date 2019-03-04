import Axios from 'axios'

export default {

  /**
   * 模拟登录
   */
  async simulateLogin (query) {
    return await Axios.post('/auth/simulateLogin.do', query)
  }

}
