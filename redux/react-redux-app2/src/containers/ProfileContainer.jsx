import React, { Component } from 'react';
import { number, string, shape, arrayOf, objectOf, func } from 'prop-types';
import { connect } from 'react-redux';

import { profileLoading } from '../state/actions/asyncAC';
import {
  profileErrorSelector,
  userIdSelector,
  sortedProfile
} from '../state/actions/selectors';
import UserProfile from '../components/UserProfile/UserProfile';
import Error from '../components/Error/Error';
import { checkUserSession } from '../utils/SessionHelpers';
import { store as key } from '../utils/const';

// Container component for the userProfile presentational one
// receives uId - user id from the store, checks it in SessionStorage and then makes a request to receive fresh data or just download existing one
// receives reqProfile function to make requests to get user's data from the server
// receives err as an array of strings, which indicates errors to occur while executing a request
// receives profile object with fields to pass it down to the presentational component, default - {default: 'some text'}, to fill just mounted component

class Profile extends Component {
  static propTypes = {
    uId: number.isRequired,
    reqProfile: func.isRequired,
    error: arrayOf(string),
    profile: shape({
      default: string,
      userId: number,
      city: string,
      languages: arrayOf(string),
      social: arrayOf(objectOf(string))
    })
  };

  static defaultProps = {
    profile: { default: 'Загружаю данные профиля...' },
    error: []
  };

  componentDidMount() {
    const { reqProfile, uId } = this.props;

    if (checkUserSession(key, uId)) return;

    reqProfile(uId);
  }

  render() {
    const { profile, error } = this.props;

    return error.length ? (
      <Error err={error} />
    ) : (
      <UserProfile data={profile} />
    );
  }
}

const mapStateToProps = state => ({
  error: profileErrorSelector(state),
  profile: sortedProfile(state),
  uId: userIdSelector(state)
});

const mapDispatchToProps = dispatch => ({
  reqProfile: id => {
    dispatch(profileLoading(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
