import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import { stateAuthSelector } from '../state/actions/selectors';

// HOC for the private route

withPrivates.propTypes = {
  component: func.isRequired
};

function withPrivates(Component) {
  check.propTypes = {
    isAuthenticated: bool.isRequired
  };

  function check({ isAuthenticated, location, ...rest }) {
    return isAuthenticated ? (
      <Component {...rest} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: location
          }
        }}
      />
    );
  }

  const mapStateToProps = state => ({
    isAuthenticated: stateAuthSelector(state)
  });

  return connect(mapStateToProps)(check);
}

export default withPrivates;
