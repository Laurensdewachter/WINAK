import axiosInstance from "../axios";
import login from "./login";

function register(
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosInstance
    .post("/users/register", {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    })
    .then((response) => {
      login(username, password);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
}

export default register;
