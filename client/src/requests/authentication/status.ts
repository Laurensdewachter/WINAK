import axios from "axios";
import { jwtDecode } from "jwt-decode";

function checkLoginStatus(): boolean {
  // Get JWT from local storage
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  // Check if access token is expired
  if (accessToken) {
    const decoded = jwtDecode(accessToken);

    // Access token is valid
    if (decoded.exp === undefined) return false;
    if (decoded.exp * 1000 > Date.now()) {
      return true;
    }
    // Check if refresh token is expired
    else if (refreshToken) {
      const decoded = jwtDecode(refreshToken);
      if (decoded.exp === undefined) return false;
      if (decoded.exp * 1000 > Date.now()) {
        // Refresh access token
        axios
          .post(import.meta.env.VITE_SERVER_HOST + "/auth/token/refresh", {
            refresh: refreshToken,
          })
          .then(function (response) {
            const newAccessToken = response.data.access;
            const newRefreshToken = response.data.refresh;

            // Store new tokens in local storage
            localStorage.setItem("access_token", newAccessToken);
            localStorage.setItem("refresh_token", newRefreshToken);
            return true;
          })
          .catch(function (error) {
            console.error(error);
            return false;
          });
      }
    }
  }
  return false;
}

export default checkLoginStatus;
