import { create } from "./BaseService";

const http = create()

export const getPetsList = () => {
    return http.get('/pets/list')
}

export const getPetsUser = (body) => {
    console.log(body)
    return http.get(`/pets/user/${body}`, body)
}

export const getPetInfo = (params) => {
    return http.get(`/pets/${params}`)
}