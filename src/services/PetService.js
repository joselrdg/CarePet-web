import { create } from "./BaseService";

const http = create()

export const getPetInfo = () => {
    return http.get('/users/me')
}