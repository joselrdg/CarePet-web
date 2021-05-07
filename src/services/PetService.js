import { create } from "./BaseService";

const http = create()

export const getPetsList = () => {
    console.log('getPetsList')
    return http.get('/pets/list')
}

export const getPetsUser = (id) => {
    console.log('getPetsUser')
    return http.get(`/pets/user/${id}`)
}

export const createPet = (body, id) => {
    console.log('createPet')
     console.log(body)
    // const id = body.user
    console.log(id)
    return http.post(`/pets/create/${id}`, body)
}

export const editPetUser = (body, idu) => {
    console.log('editPetUser')
    console.log(body)
    const id = idu
    return http.put(`/pets/editfield/${id}`, body)
}

export const editPetUserSchedule = (body, idu) => {
    console.log('editPetUser')
    console.log(body)
    const id = idu
    return http.put(`/pets/editfieldschedule/${id}`, body)
}
export const deletePetUserSchedule = (body, idu) => {
    console.log('editPetUser')
    console.log(body)
    const id = idu
    return http.put(`/pets/deletefieldschedule/${id}`, body)
}

export const imagePetUser = (body, idu) => {
    console.log('imagePetUser')
    console.log(body)
    const id = idu
    return http.put(`/pets/editfield/${id}`, body)
}

export const editOnePetUser = (body, idu) => {
    console.log('editOnePetUser')
    const id = idu
    return http.put(`/pets/edit/${id}`, body)
}

export const deletePetUser = (idu) => {
    console.log('deletePetUser')
    return http.put(`/pets/delete/${idu}`)
}

export const getPetInfo = (params) => {
    console.log('getPetInfo')
    return http.get(`/pets/${params}`)
}