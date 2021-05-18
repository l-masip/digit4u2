import React, { Component } from 'react'
import Article from '../components/Article';
import { withAuth } from '../context/auth.context';
import ArticleService from '../services/article.service';


class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    this.articleService = new ArticleService();

  }

  refreshState() {
    this.articleService.getArticles()
      .then(response => {
        console.log(response.data);
        this.setState({ articles: response.data });
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshState();
    console.log(this.props);
  }

  displayArticles(){
    const { articles } = this.state;
    return articles.map(article => {

      return (
        <Article refreshState={() => this.refreshState()} key={article.id} {...article}/>
      )
    })
  }


  render() {

    return (
        <div className="blog">
          {
            this.displayArticles()
          }
        </div>
    )
  }
}

export default withAuth(Blog);
