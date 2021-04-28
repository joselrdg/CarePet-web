import { create } from "./BaseService";

const http = create()






export const getBreedsList = () => {
    
    const options = {
        page: 1,
        limit: 10,
        collation: {
          locale: 'en',
        },
      };
    return http.get('/breeds/list', options)
}