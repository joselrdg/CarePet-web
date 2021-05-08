import { create } from "./BaseService";

const http = create()



export const getBreedsList = () => {
    return http.get(`/breeds/list/`)
}

export const getBreedsGroup = (groupQ, pageQ, limitQ) => {
    const group = groupQ || 1
    const page = pageQ || 1
    const limit = limitQ || 10;
    // const options = {
    //     page: 1,
    //     limit: 10,
    //     collation: {
    //       locale: 'en',
    //     },
    //   };
    return http.get(`/breeds/group/${group}/${page}/${limit}/`)
}

export const getBreed = (breedid) => {
    return http.get(`/breeds/breed/${breedid}`)
}
