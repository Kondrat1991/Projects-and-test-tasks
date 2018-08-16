import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func, string, arrayOf } from 'prop-types';

import { loginConfirm } from '../state/actions/asyncAC';
import {
  stateAuthSelector,
  loginErrorsSelector
} from '../state/actions/selectors';
import LoginForm from '../components/LoginForm/LoginForm';
import Error from '../components/Error/Error';

// Container component for the LoginForm presentational one
// receives isAuthenticated from the store and renders loginform (false) or redirects to /profile (true)
// receives loginReq function, which dispatches async action to receive user's confirmation from the server
// receives logErr array of strings (usually one string) to indicate if an error happened according to the typed data; default - []

class Login extends Component {
  static propTypes = {
    loginReq: func.isRequired,
    isAuthenticated: bool.isRequired,
    logErr: arrayOf(string)
  };

  static defaultProps = {
    logErr: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.isMounted)
      return { ...prevState, isMounted: true, serverErrors: [] };

    if (nextProps.logErr.length)
      return {
        ...prevState,
        password: '',
        serverErrors: [...nextProps.logErr]
      };

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isMounted: false,
      serverErrors: this.props.logErr,
      validErrors: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (password.length < 4) {
      this.setState({
        password: '',
        validErrors: 'Plz, make your password consisting of at least 4 symbols!'
      });
    } else {
      this.setState({ validErrors: '' });

      const req = {
        email,
        password
      };
      this.props.loginReq(req);
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated } = this.props;
    const { validErrors, serverErrors, email, password } = this.state;

    const serverErr = serverErrors.length ? <Error err={serverErrors} /> : null;

    return isAuthenticated ? (
      <Redirect to={from.pathname} />
    ) : (
      <LoginForm
        email={email}
        password={password}
        validErs={validErrors}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        {serverErr}
      </LoginForm>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: stateAuthSelector(state),
  logErr: loginErrorsSelector(state)
});

const mapDispatchToProps = dispatch => ({
  loginReq: data => {
    dispatch(loginConfirm(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
