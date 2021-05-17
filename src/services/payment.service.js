import axios from 'axios';

export default class PayementService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/payments`,
      withCredentials: true
    })
  }

  postPayment = (data) => this.instance.post('/', data);
}