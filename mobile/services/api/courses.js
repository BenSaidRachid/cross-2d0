import axios from "axios";
import { urls } from "../../data";
import { API_BASE_URL } from "../../data/params";
import { headers } from "../../data/api_header";

const courses = {
    getOne: ({ slug }) => {
        return axios.get(API_BASE_URL + urls.api.courses.object(slug));
    },
    edit: ({ slug, name }) => {
        return axios.put(
            API_BASE_URL + urls.api.courses.object(slug),
            {
                name,
            },
            headers().authorization,
        );
    },
    delete: ({ slug }) => {
        return axios.delete(API_BASE_URL + urls.api.courses.object(slug));
    },
    sections: {
        add: async ({ slug, title }) => {
            return axios.post(
                API_BASE_URL + urls.api.courses.sections.add(slug),
                { title },
                headers().authorization,
            );
        },
    },
};

export default courses;
