import axios from "axios";
import { capitalize } from "lodash";
import { urls } from "../../data";
import { API_BASE_URL } from "../../data/params";
import { constants } from "../../data";
import { headers } from "../../data/api_header";
import storage from "../../helpers/storage";

const teachers = {
    register: async ({ email, code }) => {
        return axios
            .post(API_BASE_URL + urls.api.teachers.register, { email, code })
            .then(({ data: result }) => {
                const { data, token } = result;
                storage.clear();
                storage.set(constants.TOKEN, token);
                storage.set(constants.TEACHER, data);
                return { data: result };
            });
    },
    login: async ({ email, password }) => {
        return axios
            .post(API_BASE_URL + urls.api.teachers.login, { email, password })
            .then(({ data: result }) => {
                const { data, token } = result;
                storage.clear();
                storage.set(constants.TOKEN, token);
                storage.set(constants.TEACHER, data);
                return { data: result };
            });
    },
    activate: async ({ first_name, last_name, password }) => {
        const teacher = storage.get(constants.TEACHER);
        return axios
            .post(
                API_BASE_URL + urls.api.teachers.activate(teacher.id),
                { first_name: capitalize(first_name), last_name: capitalize(last_name), password },
                headers().authorization,
            )
            .then(({ data: result }) => {
                const { data } = result;
                storage.set(constants.TEACHER, data);
                return { data: result };
            });
    },
    edit: {
        info: async ({ first_name, last_name, email }) => {
            const teacher = storage.get(constants.TEACHER);
            return axios
                .put(
                    API_BASE_URL + urls.api.teachers.edit.info(teacher.id),
                    { first_name: capitalize(first_name), last_name: capitalize(last_name), email },
                    headers().authorization,
                )
                .then(({ data: result }) => {
                    const { data, token } = result;
                    storage.clear();
                    storage.set(constants.TOKEN, token);
                    storage.set(constants.TEACHER, data);
                    return { data: result };
                });
        },
        password: async ({ password }) => {
            const teacher = storage.get(constants.TEACHER);
            return axios.put(
                API_BASE_URL + urls.api.teachers.edit.password(teacher.id),
                { password },
                headers().authorization,
            );
        },
    },
    channels: {
        add: async ({ name, short_description, description }) => {
            const teacher = storage.get(constants.TEACHER);
            return axios.post(
                API_BASE_URL + urls.api.teachers.channels.add(teacher.id),
                { name, short_description, description },
                headers().authorization,
            );
        },
    },
    courses: {
        add: async ({ name }) => {
            const teacher = storage.get(constants.TEACHER);
            return axios.post(
                API_BASE_URL + urls.api.teachers.courses.add(teacher.id),
                { name },
                headers().authorization,
            );
        },
    },
    getCurrent: () => {
        return storage.get(constants.TEACHER) || {};
    },
};

export default teachers;
