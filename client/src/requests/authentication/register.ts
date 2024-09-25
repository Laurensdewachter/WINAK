import axiosInstance from "../axios";
import login from "./login";
import logout from "./logout";

async function register(
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  if (localStorage.getItem("access_token")) {
    logout();
  }

  return axiosInstance
    .post("/users/register", {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    })
    .then(() => {
      login(username, password);
    })
    .catch((error) => {
      throw error;
    })
}

export default register;
