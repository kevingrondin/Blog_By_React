import React from 'react';
import Axios from 'axios';
import { validateAll } from 'indicative'

import config from '../../config'

import SignUpForm from './SignUpForm'

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {}
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const user = await this.props.registerUser(this.state)
        localStorage.setItem('user', JSON.stringify(user))
        this.props.setAuthUser(user)
        this.props.history.push('/');
      } catch (errors) {
        this.setState({ errors });
      }
  }

  render() {
    return (
      <SignUpForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}

export default Signup;
