import request from '@/utils/request'

export default {
  // 登陆
  login: (username, password) => {
    return request.post('/user/login', { 'username': username, 'password': password })
  },

  // 用户信息
  get_info: (token) => {
    return request.get(`/user/info?token=${token}`)
  },

  // 退出
  logout: (params) => {
    return request.post('/user/logout')
  }

}
