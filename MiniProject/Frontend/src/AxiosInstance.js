import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",});

// Add an interceptor to include the authorization token in the request headers
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;


// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:8000",
// });

// export default instance;


// import axios from 'axios';

// const Axios = axios.create({ baseURL: 'http://localhost:8000', withCredentials: true });
// export default Axios;