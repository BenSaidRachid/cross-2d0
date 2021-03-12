import axios from 'axios';
import { constants, urls } from '../../data';
import storage from '../../helpers/storage';
import { API_BASE_URL } from '../../data/params';

const auth = {
    token: () => {
        return storage.get(constants.TOKEN);
    },
    register: send => {
        return axios.post(API_BASE_URL + urls.api.auth.register, send).then(({ data }) => {
            const { userInfo, token } = data;
            storage.clear();
            storage.set(constants.TOKEN, token);
            storage.set(constants.USER, userInfo);
            return data;
        });
    },
    login: send => {
        return axios.post(API_BASE_URL + urls.api.auth.login, send).then(({ data }) => {
            const { userInfo, token } = data;
            storage.clear();
            storage.set(constants.TOKEN, token);
            storage.set(constants.USER, userInfo);
            return data;
        });
    },
    signOut: async () => {
        storage.clear();
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
