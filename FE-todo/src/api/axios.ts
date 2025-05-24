import axios from "axios";
import { useTokenStore } from "../store/tokestore";
const API_PORT = "http://localhost:9000/"
export const createApi = () => {
  const { token } = useTokenStore.getState();

  return axios.create({
    baseURL: API_PORT,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};
