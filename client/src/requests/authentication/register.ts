import axiosInstance from "../axios";
import login from "./login";

function register(
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  localStorage.removeItem("WINAK_auth_token");
  localStorage.removeItem("WINAK_refresh_token");
  axiosInstance
    .post("/users/register", {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    })
    .then(function (response) {
      login(username, password);
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    })
}

export default register;
