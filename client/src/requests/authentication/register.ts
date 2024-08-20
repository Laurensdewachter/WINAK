import getAxiosInstance from "../axios";
import login from "./login";

async function register(
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  const axiosInstance = await getAxiosInstance();

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
