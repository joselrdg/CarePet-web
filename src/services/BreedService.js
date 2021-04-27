import { create } from "./BaseService";

const http = create()

export const getBreedsList = () => {
    return http.get('/breeds/list')
}