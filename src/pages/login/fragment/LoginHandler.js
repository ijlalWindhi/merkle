import axios from "axios";
import { BASE_API, LOCAL_STORAGE_TOKEN } from "../../../utils/constants";
import { setLocalStorage } from "../../../utils/helper/localstorage";

export default async function LoginHandler(values) {
  const LOGIN_URL = BASE_API + "auth/login";
  try {
    const logindata = await axios.post(LOGIN_URL, values);
    const res = logindata.data;
    setLocalStorage(LOCAL_STORAGE_TOKEN, res.token);

    return Promise.resolve({
      status: "success",
      message: "login success",
    });
  } catch (err) {
    return Promise.resolve({
      status: "error",
      message: err.response.data,
    });
  }
}
