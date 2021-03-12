import api from "../services/api";

export const authorizationBearer = value => {
    return `Bearer ${value}`;
};

export const headers = () => {
    const token = api.auth.token();
    return {
        authorization: {
            headers: {
                Authorization: authorizationBearer(token),
            },
        },
    };
};

export default { headers, authorizationBearer };
