import axios from 'axios';

export default class UserService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true,
    });
  }

  getUser = (id) => this.instance.get(`/${id}`);
  editUser = (id, data) => this.instance.put(`/${id}`, data);
  deleteUser = (id) => this.instance.delete(`/${id}`);
}
