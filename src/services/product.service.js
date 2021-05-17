import axios from 'axios';

export default class ProductService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/products`,
      withCredentials: true
    })
  }

  getProducts = (data) => this.instance.get('/', data);
}