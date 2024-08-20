import axios from "axios";

async function login(username: string, password: string) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  return axios
    .post(import.meta.env.VITE_SERVER_HOST + "/auth/token", {
      username: username,
      password: password,
    })
    .then((response) => {
      const newAuthToken = response.data.access;
      const newRefreshToken = response.data.refresh;

      localStorage.setItem("access_token", newAuthToken);
      localStorage.setItem("refresh_token", newRefreshToken);
    })
    .catch((error) => {
      // Handle wrong username/password
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.detail ===
          "No active account found with the given credentials"
      ) {
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
