import axiosInstance from "../axios";

function login(username: string, password: string) {
  axiosInstance
    .post("/auth/token", {
      username: username,
      password: password,
    })
    .then(function (response) {
      const newAuthToken = response.data.access;
      const newRefreshToken = response.data.refresh;

      localStorage.setItem("WINAK_auth_token", newAuthToken);
      localStorage.setItem("WINAK_refresh_token", newRefreshToken);
    })
    .catch(function (error) {
      console.error(error);
    })
    .finally(function () {
      console.log("Request finished");
    });
}

export default login;
