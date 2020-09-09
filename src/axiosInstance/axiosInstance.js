import axios from "axios"
import { getLocalStorage} from "../const/axiosConst/tokenStorage"

import {base_URL,token_key} from "../const/axiosConst/baseURL"

let headers= {'Content-Type': 'application/x-www-form-urlencoded' }
if(localStorage.getItem(token_key)){
  headers["x-auth-token"]=getLocalStorage(token_key)
}
console.log(headers);
const axiosInstance= axios.create({
  baseURL:base_URL,    //eg localhost:3000 if u have base url in .env file than process.ENV.REACT_APP_BACKEND_URL   REACT_APP_BACKEND_URL uo chai url ko key .env file ma halda use garne
  headers,
})

export default axiosInstance