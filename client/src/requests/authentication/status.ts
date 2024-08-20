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
    // Remove expired access token
    localStorage.removeItem("access_token");
    // Check if refresh token is expired
    if (refreshToken) {
      const decoded = jwtDecode(refreshToken);
      if (decoded.exp === undefined) return false;
      if (decoded.exp * 1000 > Date.now()) {
        // Refresh access token
        axios
          .post(import.meta.env.VITE_SERVER_HOST + "/auth/token/refresh", {
            refresh: refreshToken,
          })
          .then((response) => {
            const newAccessToken = response.data.access;
            const newRefreshToken = response.data.refresh;

            // Store new tokens in local storage
            localStorage.setItem("access_token", newAccessToken);
            localStorage.setItem("refresh_token", newRefreshToken);
            return true;
          })
          .catch((error) => {
            console.error(error);
            return false;
          });
      }
      // Remove expired refresh token
      localStorage.removeItem("refresh_token");
    }
  }
  return false;
}

export default checkLoginStatus;
