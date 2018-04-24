import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ backgroundImage, subTitle, title }) => ((
  <header className="header header-inverse" style={{ backgroundImage }} data-overlay={8}>
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>{title}</h1>
          <p className="fs-20 opacity-70">{subTitle}</p>
        </div>
      </div>
    </div>
  </header>
));

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  subTitle: null,
};

export default Banner;
