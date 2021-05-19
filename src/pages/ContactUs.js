import React, { Component } from "react";
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Your name is required";
    }
    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Invalid email";
    }
    return message;
  },
  info: (value) => {
    let message;
    if (!value) {
      message = "Please write a message";
    }
    return message;
  },
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        info: "",
      },
      errors: {
        name: null,
        email: null,
        info: null,
      },
    };
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Contact email: </label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="info">Message: </label>
          <input type="text" name="info" />
        </div>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ContactUs;
