import axios from 'axios';
import setAxiosHeaders from './axiosHeader';

setAxiosHeaders();
export default axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});
