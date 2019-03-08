import request from '../utils/request'

export function log (str:any) {
  console.log.apply(console, arguments)
}

/**
 * params url 会有 ?user=1&pass=2
 * query 则没有
 */
export function getCity () {
  return request({
    url: '/json/city.json',
    method: 'get'
    // params: data
  })
}
export function logIn (data:any) {
  return request({
    url: '/user',
    method: 'post',
    data: data
  })
}
