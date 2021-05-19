import axios from 'axios';

export default class PayementService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/payments`,
      withCredentials: true,
    });
  }

  postPayment = (id, data) => this.instance.post(`/${id}`, data);
  postReserve = (id) => this.instance.post(`/${id}`);
}
