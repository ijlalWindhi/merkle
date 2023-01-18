import { getLocalStorage } from "./helper/localstorage";

const BASE_API = "https://fakestoreapi.com/";

const LOCAL_STORAGE_TOKEN = "fakeStore/token";

const checkLogged = () => {
  const token = getLocalStorage(LOCAL_STORAGE_TOKEN);

  if (token) {
    return true;
  }
};

const TOKEN = {
  headers: {
    Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
  },
};

export { BASE_API, LOCAL_STORAGE_TOKEN, TOKEN, checkLogged };
