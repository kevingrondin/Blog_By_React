import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../../Banner';
import Article from '../../Article';

const Articles = ({ articles }) => ((
  <div>

    <Banner
      backgroundImage="url(assets/img/bg-gift.jpg)"
      title="Latest Blog Posts"
      subTitle="Read and get updated on how we progress."
    />

    <main className="main-content bg-gray">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
          {articles && articles.map(article => (
            <div key={article.id}>
              <Article article={article} />
              <hr />
            </div>))}
          <nav className="flexbox mt-50 mb-50">
            <a className="btn btn-white disabled">
              <i className="ti-arrow-left fs-9 mr-4" /> Newer
            </a>
            <a className="btn btn-white" href="#">Older
              <i className="ti-arrow-right fs-9 ml-4" />
            </a>
          </nav>
        </div>
      </div>
    </main>
  </div>
));

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Articles;
