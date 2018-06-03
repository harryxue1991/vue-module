import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export default {
  // 表格数据
  getList: (params) => {
    return request.get('/table/list', params).then(resp => resp.data)
  }
}
