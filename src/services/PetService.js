import { create } from "./BaseService";

const http = create()

export const getPetsList = () => {
    console.log('getPetsList')
    return http.get('/pets/list')
}

export const getOnePet = (id) => {
    console.log('getOnePet')
    return http.get(`/pets/pet/${id}`)
}

export const getPetsUser = (id) => {
    console.log('getPetsUser')
    return http.get(`/pets/user/${id}`)
}

export const createPet = (body, id) => {
    // const id = body.user
    return http.post(`/pets/create/${id}`, body)
}

export const editPetUser = (body, idu) => {
    const id = idu
    return http.put(`/pets/editfield/${id}`, body)
}

export const editPetUserSchedule = (body, idu) => {
    const id = idu
    return http.put(`/pets/editfieldschedule/${id}`, body)
}
export const deletePetUserSchedule = (body, idu) => {
    const id = idu
    return http.put(`/pets/deletefieldschedule/${id}`, body)
}

export const imagePetUser = (body, idu) => {
    const id = idu
    return http.put(`/pets/editfield/${id}`, body)
}

export const editOnePetUser = (body, idu) => {
    const id = idu
    return http.put(`/pets/edit/${id}`, body)
}

export const deletePetUser = (idu) => {
    return http.put(`/pets/delete/${idu}`)
}

export const getPetInfo = (params) => {
    return http.get(`/pets/${params}`)
}