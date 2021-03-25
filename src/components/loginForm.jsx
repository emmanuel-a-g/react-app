import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi-browser";
//Cool Tricks are at the bottom of the page

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  // validateProperty = ({name, value}) => {
  //   //a function that would be used to validate input fields
  //   if (name === "username") {
  //     if (value.trim() === "") { return 'Username is required.'};
  //   }
  //   if (name === "password") {
  //     if (value.trim() === "") { return 'Password is required.'};
  //   }
  // }

  handleChange = ({ currentTarget: input }) => {
    //we are changing the e for input instead
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const account = { ...this.state.account };
    //we are using Bracket Notation over DOT Notation
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    //Joi: the properties, the schema, options
    //abort early = false, will not abort early
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    let errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message; 
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // let currentUser = this.username.current.value;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };

  render() {
    const { username, password } = this.state.account;
    const { errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

//cool little trick to wrap around code
//click on cmmd + shift +

//TRICK 2# If you want to select various places to write at the same time
//just click wherever you want + command and your typing multiplies!

//how to make a reference for an element
// username = React.createRef();
// componentDidMount() {
//   //we want to focus on the element
//   this.username.current.focus();
// }
