import axios from "axios";
import { urls } from "../../data";
import { API_BASE_URL } from "../../data/params";
import { headers } from "../../data/api_header";

const sections = {
    edit: ({ id, title }) => {
        return axios.put(
            API_BASE_URL + urls.api.sections.object(id),
            {
                title,
            },
            headers().authorization,
        );
    },
    delete: ({ id }) => {
        return axios.delete(API_BASE_URL + urls.api.sections.object(id));
    },
};

export default sections;
