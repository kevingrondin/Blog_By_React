import React from 'react';
import PropTypes from 'prop-types';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';

import CreateArticleForm from './CreateArticleForm';

class CreateArticle extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      image: null,
      content: EditorState.createEmpty(),
      category: null,
      errors: [],
      categories: [],
      editing: false,
      article: null,
    };
  }

  async componentWillMount() {
    if (this.props.match.params.slug) {
      const article = this.props.articles.find(articleInArray =>
        articleInArray.slug === this.props.match.params.slug);
      if (!article) {
        this.props.history.push('/user/articles');
        return;
      }

      const categories = await this.props.getArticleCategories();
      this.setState({
        editing: true,
        article,
        categories,
        title: article.title,
        category: article.category_id,
        content: article.content,
      });
    } else {
      const categories = await this.props.getArticleCategories();
      this.setState({
        categories,
      });
    }
  }

  handleEditorState = (editorState) => {
    this.setState({
      content: editorState,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await this.props.createArticle({
        title: this.state.title,
        content: draftToHtml(convertToRaw(this.state.content.getCurrentContent())),
        category: this.state.category,
        image: this.state.image,
      }, this.props.token);
      this.props.notyService.success('Article created successfully.');
      this.props.history.push('/');
    } catch (errors) {
      this.props.notyService.error('Please check for errors. Something went wrong.');
      this.setState({ errors });
    }
  }

  updateArticle = async (event) => {
    event.preventDefault();
    try {
      await this.props.updateArticle({
        title: this.state.title,
        image: this.state.image,
        content: draftToHtml(convertToRaw(this.state.content.getCurrentContent())),
        category: this.state.category,
      }, this.state.article, this.props.token);
      this.props.notyService.success('Article updated successfully.');
      this.props.history.push('/');
    } catch (errors) {
      this.props.notyService.error('Please check for errors. Something went wrong.');
      this.setState({ errors });
    }
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
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
        editing={this.state.editing}
        article={this.state.article}
        title={this.state.title}
        content={this.state.content}
        category={this.state.category}
        updateArticle={this.updateArticle}
        handleEditorState={this.handleEditorState}
      />
    );
  }
}

CreateArticle.propTypes = {
  getArticleCategories: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  updateArticle: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }).isRequired,
  }).isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  })),
  notyService: PropTypes.shape({
    success: PropTypes.func.isRequired,
    error: PropTypes.func.isRequired,
  }).isRequired,
};

CreateArticle.defaultProps = {
  updateArticle: () => {},
  articles: [],
};

export default CreateArticle;
