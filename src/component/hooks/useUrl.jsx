import axios from 'axios';

const url=axios.create({
    baseURL:'https://api.betquix.com/api/auth',
})
export const useUrl = () => {
    return url;
}