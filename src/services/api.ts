import axios from 'axios';
import TokenService from './token.service';
const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_URL_DEV
    : process.env.REACT_APP_BASE_URL_LOCAL;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    const token = TokenService.getLocalAccessToken();
    if (token && config.headers && config.url !== '/api/auth/login') {
      config.headers['Authorization'] = 'Bearer ' + token; // for Spring Boot back-end
      // config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;

    if (originalConfig.url !== '/api/auth/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post('/api/auth/refresh', {
            refreshToken: TokenService.getLocalRefreshToken(),
          });

          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export default instance;
