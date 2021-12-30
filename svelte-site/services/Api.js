import axios from 'axios'

const axiosAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
})

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ''
    }

    return axiosAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data)
    })
    .catch(error => {
        return Promise.reject(error)
    })
}

const get = (url, request) => apiRequest('get', url, request)

const post = (url, request) => apiRequest("post", url, request)

const deleteRequest = (url, request) => apiRequest("delete", url, request)

const API = {
    get,
    post,
    delete: deleteRequest
}

export default API;