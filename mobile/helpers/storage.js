import { AsyncStorage } from "react-native";

const storage = {
    get: key => AsyncStorage.getItem(key),
    set: (key, value) => AsyncStorage.setItem(key, JSON.stringify({ value })),
    remove: key => AsyncStorage.removeItem(key),
    clear: () => {
        AsyncStorage.clear();
    },
};

export default storage;
