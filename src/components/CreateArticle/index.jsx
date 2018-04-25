import React from 'react';

import CreateArticleForm from './CreateArticleForm';

class CreateArticle extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      image: null,
      content: '',
      category: null,
      errors: {},
      categories: []
    };
  }

  async componentWillMount() {
    const categories = await this.props.getArticleCategories();

    this.setState({
      categories
    });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value,
    });
  }

  render() {
    return (
      <CreateArticleForm
        handleInputChange={this.handleInputChange}
        categories={this.state.categories}
      />
    );
  }
}

export default CreateArticle;
