import axios, { type AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:8081";

const responseBody = (reponse: AxiosResponse) => reponse.data;

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};


const Catalog = {
    list: () => request.get('/product/1'),
    details: (id: number) => request.get(`product/${id}`),
};

const agent = {
    Catalog,
};

export default agent;