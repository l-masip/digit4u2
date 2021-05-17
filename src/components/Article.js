import React from 'react'
import ArticleService from '../services/article.service';


export default function Article({ name, description, link, photo, id, refreshState }) {
  const articleService = new ArticleService();

  const deleteArticle = () => {
    articleService.deleteArticle(id)
      .then(() => {
        console.log('Deleted');
        refreshState();
      })
      .catch(err => console.error(err))
  }

  const editArticle = () => {
    articleService.editArticle(id)
    .then(()=> {
      console.log('Edited');
      refreshState();
    })
    .catch(err => console.error(err))

  }


  return (
    <div>
      <div>
        <p>Name:{name}</p>
        <img src={photo} alt="photo"/>
        <p>Description:{description}</p>
        <a href={link}>Read More</a>
      </div>
      <div>
        <button onClick={() => editArticle()}>Edit</button>
        <button onClick={() => deleteArticle()}>Delete</button>
      </div>
    </div>
  );
}
