import axiosInstance from "../axios";

function login(username: string, password: string) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosInstance
    .post("/auth/token", {
      username: username,
      password: password,
    })
    .then(function (response) {
      const newAuthToken = response.data.access;
      const newRefreshToken = response.data.refresh;

      localStorage.setItem("access_token", newAuthToken);
      localStorage.setItem("refresh_token", newRefreshToken);
    })
    .catch(function (error) {
      console.error(error);
    })
    .finally(function () {
      console.log("Request finished");
    });
}

export default login;
