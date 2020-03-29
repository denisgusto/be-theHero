import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  isPrivate,
  component: Component,
  ...rest
}) {
  const id = localStorage.getItem('ongId');

  if (!id && isPrivate) {
    return <Redirect to="/" />;
  }

  if (id && !isPrivate) {
    return <Redirect to="/profile" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
