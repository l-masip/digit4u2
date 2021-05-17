import axios from 'axios';

export default class ExpertService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/experts`,
      withCredentials: true
    })
  }

  getExpert = (data) => this.instance.get('/:id', data);
}