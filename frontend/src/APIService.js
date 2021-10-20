import axios from "axios"

export class APIService {
  constructor() {
this.apiRoot = process.env.API_URL
  }
  async getPages(query) {
        // const API_ROOT = "http://127.0.0.1:8000/api/v2";
        const url = `${this.apiRoot}/pages/${query}`;
        return axios.get(url).then(response => response.data);
    };
  }
