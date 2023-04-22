import axios from "axios";
import { LOCAL_URL } from "../../helpers/constants/common.constants";

export const ratesAxiosInstance = axios.create({
  baseURL: LOCAL_URL,
});
