import axios from "axios";
const API_ROOT = "http://127.0.0.1:8000/api/v2";

export class APIService {
  constructor() {}
  async getPages(query) {
    const url = `${API_ROOT}/pages/${query}`;
    return axios.get(url).then(response => response.data);
  }
}
