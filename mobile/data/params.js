import Constants from "expo-constants";
const { manifest } = Constants;

const API_BASE_URL = `http://${manifest.debuggerHost.split(":").shift()}:8080`;

export { API_BASE_URL };
