import { jwtDecode } from "jwt-decode";

function checkLoginStatus() {
  // Get JWT from local storage
  const refreshToken = localStorage.getItem("refresh_token");

  // Check if refresh token is expired
  if (refreshToken) {
    const decoded = jwtDecode(refreshToken);

    // Access token is valid
    if (decoded.exp === undefined) return false;
    if (decoded.exp * 1000 > Date.now()) {
      return true;
    }
  }
  // Remove tokens from local storage
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("username");
  return false;
}

export default checkLoginStatus;
