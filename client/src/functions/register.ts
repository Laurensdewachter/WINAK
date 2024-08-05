import axios from "axios";

function register(
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const url = import.meta.env.VITE_SERVER_HOST;

  axios
    .post(url + "/users/register", {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    })
    .finally(function () {
      console.log("Request finished");
    });
}

export default register;
