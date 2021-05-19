import React from 'react'
import ArticleService from '../services/article.service';
import {Link} from "react-router-dom";
import { withAuth } from '../context/auth.context';


 function Article({ name, description, link, photo, id, refreshState, user }) {
  const articleService = new ArticleService();

  const deleteArticle = () => {
    articleService.deleteArticle(id)
      .then(() => {
        console.log('Deleted');
        refreshState();
        window.location.reload();
      })
      .catch(err => console.error(err))
  }


  return (
    <div>
      <div>
        <p>Name:{name}</p>
        <img src={photo} alt="photo" />
        <p>Description:{description}</p>
        <a target="_blank" href={link}>Read More</a>
      </div>
      {user && user.role === 'admin' ? 
      <div>
        <Link to={`/editArticle/${id}`}>Edit</Link>
        <button onClick={() => deleteArticle()}>Delete</button>
      </div>
      : null
      }
    </div>
  )};

  export default withAuth(Article)