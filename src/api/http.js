import axios from 'axios'
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
*/

export async function get(url, data = {}) {
  try {
    return await axios.get(url, data)
  } catch (err) {
    return Promise.reject(err)
  }
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export async function post(url, data = {}) {
  try {
    return await axios.post(url, data)
  } catch (err) {
    return Promise.reject(err)
  }
}