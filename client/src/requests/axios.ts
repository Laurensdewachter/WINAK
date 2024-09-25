import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get JWT from local storage
    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      // Add JWT to the Authorization header
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // Handle 401 Unauthorized error
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Get refresh token from local storage
      const refreshToken = localStorage.getItem("refresh_token");
      // Request new access token using refresh token
      if (refreshToken) {
        try {
          const response = await axios.post(
            import.meta.env.VITE_SERVER_HOST + "/users/refresh",
            { refresh: refreshToken }
          );
          const newAuthToken = response.data.access;
          const newRefreshToken = response.data.refresh;
          // Store new tokens in local storage
          localStorage.setItem("auth_token", newAuthToken);
          localStorage.setItem("refresh_token", newRefreshToken);
          // Add new access token to the Authorization header
          originalRequest.headers.Authorization = `Bearer ${newAuthToken}`;
          // Retry the original request
          return axios(originalRequest);
        } catch (error) {
          // TODO: Handle refresh token error
          console.error(error);
        }
      }
    }
  }
);

export default axiosInstance;
