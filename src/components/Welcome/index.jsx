import React from 'react';
import PropTypes from 'prop-types';

import Articles from './Articles';

class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      articles: {},
    };
  }

  async componentWillMount() {
    const articles = await this.props.getArticles();

    this.setState({ articles });
  }

  render() {
    return (
      <Articles
        articles={this.state.articles.data}
      />
    );
  }
}

Welcome.propTypes = {
  getArticles: PropTypes.func.isRequired,
};

export default Welcome;
