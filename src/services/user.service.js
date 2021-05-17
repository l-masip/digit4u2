import axios from 'axios';

export default class UserService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true
    })
  }

  getUser = (data) => this.instance.get('/', data);
  editUser = (data) => this.instance.put('/:id', data);
  deleteUser = () => this.instance.delete('/:id');
}