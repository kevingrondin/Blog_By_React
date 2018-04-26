import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

class SingleArticleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      article: null,
      loading: true,
    };
  }
  async componentWillMount() {
    const article = await this.props.getArticle(this.props.match.params.slug);
    this.setState({ article, loading: false });
  }

  render() {
    return (
      <div>
        {
          !this.state.loading &&
          <Article
            article={this.state.article}
          />
        }
        {
          this.state.loading &&
          <p className="text-center">LOADING ...</p>
        }
      </div>
    );
  }
}

SingleArticleContainer.propTypes = {
  getArticle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SingleArticleContainer;
