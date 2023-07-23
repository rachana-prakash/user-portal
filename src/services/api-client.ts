import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://panorbit.in/api",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<T>(this.endpoint + ".json")
      .then((res) => res.data);
  };
}

export default APIClient;
