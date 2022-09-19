import axios from "axios";

const url = 'https://rickandmortyapi.com/api'

export const api = {
    getEpisodes: async (page:number) => {
        let response = await axios.get(`${url}/episode?page=${page}`)
        return response
    },
   
}