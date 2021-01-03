const BASE_URL = "https://jsonplaceholder.typicode.com/";
import axios from 'axios';

const options = {
        headers: {'Content-Type': 'application/json',
        "Accept": "application/json",
        }
    };

  export const postApi = async (url, body) => {
    const response = await axios.post(BASE_URL+url, body, options);
    return response;
  }  

  export const getApi = async(url) => {
    const response = await axios.get(BASE_URL+url,options);
    return response.data;
  }
