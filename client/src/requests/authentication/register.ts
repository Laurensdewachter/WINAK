import axiosInstance from "../axios";
import login from "./login";
import logout from "./logout";

async function register(
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  study: string
) {
  if (localStorage.getItem("access_token")) {
    logout();
  }

  const study_dict: {[id: string]: string} = {
    "Wiskunde": "W",
    "Informatica": "I",
    "Fysica": "F",
    "Andere": "A",
  };

  study = study_dict[study];

  return axiosInstance
    .post("/users/register", {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      study: study,
    })
    .then(() => {
      login(username, password);
    })
    .catch((error) => {
      throw error;
    });
}

export default register;
