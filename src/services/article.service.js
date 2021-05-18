import axios from 'axios';

export default class ArticleService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/articles`,
      withCredentials: true,
    });
  }

  getArticles = (data) => this.instance.get('/', data);
  postArticles = (data) => this.instance.post('/', data);
  editArticle = (id, data) => this.instance.put(`/${id}`, data);
  deleteArticle = (id) => this.instance.delete(`/${id}`);
}
