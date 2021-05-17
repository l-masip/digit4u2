import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validators = {
  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Invalid email";
    }

    return message;
  },

  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    } else if (value.length < 3) {
      message = "Invalid password";
    }

    return message;
  },

  name: (value) => {
    let message;
    if (!value) {
      message = "Name is required";
    }
    return message;
  },

  surname: (value) => {
    let message;
    if (!value) {
      message = "Surname is required";
    }
    return message;
  },

  phone: (value) => {
    let message;
    if (!value) {
      message = "Phone number is required";
    } else if (value.length < 7) {
      message = "Invalid phone number";
    }
    return message;
  },
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        password: "",
        name: "",
        surname: "",
        phone: "",
        position: "",
      },
      errors: {
        email: null,
        password: null,
        name: null,
        surname: null,
        phone: null,
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fields);
    this.props.signup(this.state.fields);
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
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={fields.email}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            value={fields.surname}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="phone">Phone number: </label>
          <input
            type="number"
            name="phone"
            value={fields.phone}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            value={fields.position}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <button type="submit">Create user</button>
      </form>
    );
  }
}

export default withAuth(Signup);
