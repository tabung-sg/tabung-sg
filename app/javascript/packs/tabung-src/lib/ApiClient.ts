import axios from "axios";
import config from "../config";

const BASE_URL = config.BASE_URL;

const ApiClient = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default ApiClient;