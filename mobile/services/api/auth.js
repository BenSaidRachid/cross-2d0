import axios from "axios";
import { constants, urls } from "../../data";
import storage from "../../helpers/storage";
import { API_BASE_URL } from "../../data/params";

const auth = {
    token: () => {
        return storage.get(constants.TOKEN);
    },
    signUp: send => {
        return axios.post(API_BASE_URL + urls.auth.signUp, send).then(({ data }) => {
            const { userInfo, token } = data;
            storage.clear();
            storage.set(constants.TOKEN, token);
            storage.set(constants.USER, userInfo);
            return data;
        });
    },
    login: send => {
        return axios.post(API_BASE_URL + urls.auth.login, send).then(({ data }) => {
            const { userInfo, token } = data;
            storage.clear();
            storage.set(constants.TOKEN, token);
            storage.set(constants.USER, userInfo);
            return data;
        });
    },
    signOut: async () => {
        await axios.post(API_BASE_URL + urls.auth.signOut);
        return storage.clear();
    },
    isAuth: () => {
        return new Promise((resolve, reject) => {
            storage
                .get(constants.USER)
                .then(res => {
                    if (res !== null) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                })
                .catch(err => reject(err));
        });
    },
};

export default auth;
