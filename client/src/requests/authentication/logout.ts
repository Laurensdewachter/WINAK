import axiosInstance from "../axios";

async function logout() {
  const refresh_token = localStorage.getItem("refresh_token");
  if (refresh_token) {
    return axiosInstance
      .post("/users/token/blacklist", {
        refresh: refresh_token,
      })
      .then(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("username");
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default logout;
