import axios from "axios"

export class APIService {
  constructor() {
    if (process.env.DEVELOPMENT) {
        console.log("Development mode: local API URL is used.");
        this.apiRoot = process.env.API_URL_DEVELOPMENT
    }
    else {
      this.apiRoot = process.env.API_URL_PRODUCTION
    }
  }
  async getPages(query) {
        // const API_ROOT = "http://127.0.0.1:8000/api/v2";
        const url = `${this.apiRoot}/pages/${query}`;
        return axios.get(url).then(response => response.data);
    };
  }
