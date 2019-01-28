import request from '../utils/request'

export function getCity() {
  return request({
    url: '/json/city.json',
    method: 'get',
    // params: data
  })
}
