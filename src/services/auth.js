import Axios from 'axios';
import { validateAll } from 'indicative'

import config from '../config'

export default class AuthService {
  async registerUser(data) {
    const rules = {
      name: 'required|string',
      email: 'required|email',
      password: 'required|string|min:6|confirmed'
    };

    const messages = {
      required: 'The {{ field }} is required.',
      'email.email': 'The email is invalid.',
      'password.confirmed': 'The password confirmation does not match.'
    };

    try {
      await validateAll(data, rules, messages)

      try {
        const response = await Axios.post(`${config.apiUrl}/auth/register`, {
          name: data.name,
          email: data.email,
          password: data.password
        })

        return response.data.data;
      } catch (errors) {
        const formattedErrors = {};
        formattedErrors['email'] = errors.response.data['email'][0];
        return formattedErrors
      }
    } catch (errors) {
      const formattedErrors = {}
      errors.forEach(error => formattedErrors[error.field] = error.message)
      return formattedErrors
    }
  }
}
