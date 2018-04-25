import React from 'react';

import LoginForm from './LoginForm';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (<LoginForm
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleSubmit}
    />);
  }
}

export default Login;
