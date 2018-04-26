import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ article }) => ((
  <article className="mt-90">
    <header className="text-center mb-40">
      <h3>
        <a href="blog-single.html">{article.title}</a>
      </h3>
      <div className="link-color-default fs-12">
        <a href="#">{article.category.name}</a>,
        <time>{(new Date(article.created_at)).toDateString()}</time>
      </div>
    </header>
    <a href="blog-single.html">
      <img className="rounded" src={article.imageUrl} alt="..." />
    </a>
    <div className="card-block">
      <p className="text-justify">Together. </p>
      <p className="text-center mt-40">
        <Link className="btn btn-primary btn-round" to="/article/some-title-slug">Read more</Link>
      </p>
    </div>
  </article>
));

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
