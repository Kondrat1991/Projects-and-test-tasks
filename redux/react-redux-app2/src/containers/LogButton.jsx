import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import { logout } from '../state/actions/syncAC';
import { stateAuthSelector } from '../state/actions/selectors';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';

// Container component for the PrimaryButton presentational one
// receives isAuthenticated from the store and changes the text inside the button according to this value
// receives signout function to change the store state.user.isAuthenticated value to false (when it is true)
// or redirects user to the /login route (when it is false)

class LogButton extends Component {
  static propTypes = {
    isAuthenticated: bool.isRequired,
    signout: func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isAuthenticated, history, signout } = this.props;
    if (!isAuthenticated) {
      history.push('/login');
    } else {
      signout();
      history.push('/');
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    const text = isAuthenticated ? 'Выйти' : 'Войти';

    return <PrimaryButton text={text} onClick={this.handleClick} />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: stateAuthSelector(state)
});

const mapDispatchToProps = dispatch => ({
  signout: () => {
    dispatch(logout());
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LogButton)
);
