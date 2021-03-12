import axios from "axios";
import { urls } from "../../data";
import { API_BASE_URL } from "../../data/params";
import { headers } from "../../data/api_header";

const channels = {
    getAll: () => {
        return axios.get(API_BASE_URL + urls.api.channels.base);
    },

    getOne: ({ slug }) => {
        return axios.get(API_BASE_URL + urls.api.channels.object(slug));
    },

    edit: ({ name, short_description, description, active }) => {
        return axios.put(
            API_BASE_URL + urls.api.channels.object(slug),
            {
                name,
                short_description,
                description,
                active,
            },
            headers().authorization,
        );
    },
};

export default channels;
