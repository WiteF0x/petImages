import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://picsum.photos',
  timeout: 1000 * 60, // 1 min
});

let store = null;

axiosInstance.setStore = (providedStore) => {
  store = providedStore;
};

export default axiosInstance;
