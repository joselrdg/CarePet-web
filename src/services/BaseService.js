import axios from 'axios';
import { getAccessToken } from '../stores/AccessTokenStore';

export const create = (opts = {}) => {
    const http = axios.create({
        baseURL: 'http://localhost:3001/api'
    })

    http.interceptors.request.use(request => {
        if(opts.useAccessToken!== false){
            request.headers.common.Authorization = `Bearer ${getAccessToken()}`
        } else {
            delete request.headers.common.Authorization
        }
        return request
    })

    http.interceptors.response.use(
        response => response.data
    )
    return http
}