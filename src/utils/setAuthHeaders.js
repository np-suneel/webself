import axios from "axios";

const setAuthHeaders = (token) => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthHeaders;
