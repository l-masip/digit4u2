import React, { Component } from "react";
import { withAuth } from "../context/auth.context";
import Article from "../components/Article";
import ArticleService from "../services/article.service";

const articleService = new ArticleService();

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Name is required";
    }
    return message;
  },
  description: (value) => {
    let message;
    if (!value) {
      message = "Description is required";
    }
    return message;
  },
  link: (value) => {
    let message;
    if (!value) {
      message = "Link is required";
    }
    return message;
  },
  photo: (value) => {
    let message;
    if (!value) {
      message = "Photo is required";
    }

    return message;
  },
};
class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        description: "",
        link: "",
        photo: "",
      },
      errors: {
        name: null,
        description: null,
        link: null,
        photo: null,
      },
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    articleService
      .getArticle(this.props.match.params.id)
      .then((response) => {
        this.setState({ fields: response.data });
      })
      .catch((err) => console.error(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    articleService
      .editArticle(this.props.match.params.id, this.state.fields)
      .then(() => {
        console.log("Edited");
        this.props.history.push("/articles");
      })
      .catch((err) => console.error(err));
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value),
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-item">
          <label htmlFor="name">Photo: </label>
          <input
            type="text"
            value={fields.name}
            onChange={(e) => this.handleChange(e)}
            name="name"
          />
        </div>

        <div className="form-item">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            value={fields.description}
            onChange={(e) => this.handleChange(e)}
            name="description"
          />
        </div>

        <div className="form-item">
          <label htmlFor="link">Link: </label>
          <input
            type="text"
            value={fields.link}
            onChange={(e) => this.handleChange(e)}
            name="link"
          />
        </div>

        <div className="form-item">
          <label htmlFor="photo">Photo: </label>
          <input
            type="file"
            name="photo"
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <button type="submit">Edit Article</button>
      </form>
    );
  }
}
export default withAuth(EditArticle);
