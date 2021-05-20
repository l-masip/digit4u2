import React from "react";
import ArticleService from "../services/article.service";
import { Link } from "react-router-dom";
import { withAuth } from "../context/auth.context";
import "./article.css";

function Article({ name, description, link, photo, id, refreshState, user }) {
  const articleService = new ArticleService();

  const deleteArticle = () => {
    articleService
      .deleteArticle(id)
      .then(() => {
        console.log("Deleted");
        refreshState();
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="full-article">
      <div className="article-body">
        <h2>{name}</h2>
        <img src={photo} alt="photo" />
        <p>{description}</p>
        <a target="_blank" href={link}>
          Read More
        </a>
      </div>
      {user && user.role === "admin" ? (
        <div className="article-admin">
          <button className="article-admin-btn">
            <Link to={`/editArticle/${id}`} className="admin-link">
              Edit
            </Link>
          </button>
          <button onClick={() => deleteArticle()} className="article-admin-btn">
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default withAuth(Article);
