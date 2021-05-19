import React, { Component } from "react";
import { withAuth } from "../context/auth.context";
import UserService from "../services/user.service";

const userService = new UserService();

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

  position: (value) => {
    let message;
    if (!value) {
      message = "Position is required";
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
        position: null,
      },
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    userService
      .getUser(this.props.match.params.id)
      .then((response) => {
        this.setState({ fields: response.data });
      })
      .catch((err) => console.error(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, surname, phone, position } = this.state.fields;
    userService
      .editUser(this.props.match.params.id, { name, surname, phone, position })
      .then(() => {
        console.log("Edited");
        this.props.history.push("/userhomepage");
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
        {/* <div className="form-item">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={(e) => this.handleChange(e)}
          />
        </div> */}

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
