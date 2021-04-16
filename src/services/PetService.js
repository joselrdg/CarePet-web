import { create } from "./BaseService";

const http = create()

export const getPetsList = () => {
    return http.get('/pets/list')
}