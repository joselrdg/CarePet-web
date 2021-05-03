import { create } from "./BaseService";

const http = create()

export const getPetsList = () => {
    return http.get('/pets/list')
}

export const getPetsUser = (id) => {
    return http.get(`/pets/user/${id}`)
}

export const createPet = (body, id) => {
     console.log(body)
    // const id = body.user
    console.log(id)
    return http.post(`/pets/create/${id}`, body)
}

export const editPetUser = (body, idu) => {
    console.log(body)
    const id = idu
    return http.put(`/pets/edit/${id}`, body)
}

export const getPetInfo = (params) => {
    return http.get(`/pets/${params}`)
}