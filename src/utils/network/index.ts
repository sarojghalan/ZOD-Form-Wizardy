import axios from "axios";

export const service = axios.create();

service.interceptors.request.use(
  function (config) {
    const token = "";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

