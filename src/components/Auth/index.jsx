import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({
  path, props, component: Component, isAuthenticated,
}) => (<Route
  path={path}
  render={
    (routerProps) => {
      if (isAuthenticated) {
        return <Component {...props} {...routerProps} />;
      }

      return <Redirect to="/login" />;
    }
  }
/>
);

Auth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  props: PropTypes.objectOf(PropTypes.any),
  path: PropTypes.string.isRequired,
};

Auth.defaultProps = {
  props: {},
};

export default Auth;
