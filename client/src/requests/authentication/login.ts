import axios from "axios";

async function login(username: string, password: string) {
  

  return axios
    .post(import.meta.env.VITE_SERVER_HOST + "/users/token", {
      username: username,
      password: password,
    })
    .then((response) => {
      const newAuthToken = response.data.access;
      const newRefreshToken = response.data.refresh;

      localStorage.setItem("access_token", newAuthToken);
      localStorage.setItem("refresh_token", newRefreshToken);
      localStorage.setItem("username", username);
    })
    .catch((error) => {
      // Handle wrong username/password
      if (error.response && error.response.status === 401) {
        throw new Error("Wrong username or password");
      }
      // Handle other errors
      else if (error.request) {
        throw new Error("Server not responding");
      }
      // Seting up request failed
      else {
        throw new Error("Request failed");
      }
    });
}

export default login;
