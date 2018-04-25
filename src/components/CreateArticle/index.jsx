import React from 'react';

import CreateArticleForm from './CreateArticleForm';

class CreateArticle extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      image: null,
      content: '',
      channel: null,
      errors: {}
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <CreateArticleForm
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default CreateArticle;
