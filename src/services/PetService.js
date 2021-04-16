import { create } from "./BaseService";

const http = create()

export const getPetsList = () => {
    return http.get('/pets/list')
}

export const getPetInfo = (params) => {
    return http.get(`/pets/${params}`)
}