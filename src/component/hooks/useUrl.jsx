import axios from 'axios';

const url=axios.create({
    baseURL:'http://api-staging.betquix.com/api/auth',
})
export const useUrl = () => {
    return url;
}