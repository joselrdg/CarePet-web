import { create } from "./BaseService";

const http = create()

export const getPetsList = () => {
    return http.get('/pets/list')
}

export const getPetsUser = (id) => {
    return http.get(`/pets/user/${id}`)
}

export const createPet = (body) => {
    const id = body.id
    return http.post(`/pets/create/${id}`, body)
}

export const getPetInfo = (params) => {
    return http.get(`/pets/${params}`)
}