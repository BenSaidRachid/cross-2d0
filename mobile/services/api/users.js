import axios from 'axios';
import { urls } from '../../data';
import { API_BASE_URL } from '../../data/params';

const tasks = {
    getOne: id => {
        return axios.get(API_BASE_URL + urls.api.users.object(id));
    },
    tasks: {
        list: userId => {
            return axios.get(API_BASE_URL + urls.api.users.object(userId) + urls.api.tasks.base);
        },
        create: (userId, data) => {
            return axios.get(
                API_BASE_URL + urls.api.users.object(userId) + urls.api.tasks.base,
                data,
            );
        },
    },
};

export default tasks;
