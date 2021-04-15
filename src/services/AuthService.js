import {create} from './BaseService'

const http = create()

export const login = (body) => {
return http.post('/users/auth', body)
}