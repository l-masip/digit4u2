import React, { Component } from "react";
import { withAuth } from "../context/auth.context";

const validators = {
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

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        password: "",
        name: "",
        surname: "",
        phone: "",
        position: "",
      },
      errors: {
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
    const uploadData = new FormData();
    //uploadData.append('nombre de la clave', 'valor');
    Object.keys(this.state.fields).forEach((key) => {
      uploadData.append(key, this.state.fields[key]);
    });

    this.props.edit(uploadData);
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

        <button type="submit">Submit changes</button>
      </form>
    );
  }
}

export default withAuth(EditUser);
