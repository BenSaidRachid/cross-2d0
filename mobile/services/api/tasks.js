import axios from 'axios';
import { urls } from '../../data';
import { API_BASE_URL } from '../../data/params';

const tasks = {
    edit: (id, data) => {
        return axios.put(API_BASE_URL + urls.api.tasks.object(id), data);
    },
    delete: id => {
        return axios.delete(API_BASE_URL + urls.api.tasks.object(id));
    },
};

export default tasks;
