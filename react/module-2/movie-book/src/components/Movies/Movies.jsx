import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from '../MovieList/MovieList';
import { Route, NavLink } from 'react-router-dom';

export default class Movies extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    console.log('Movies', this.props);
    return (
      <div>
        <ul>
        <li>
            <NavLink to={this.props.match.path + '/now_playing'}>
              Now playing
            </NavLink>
          </li>
          <li>
            <NavLink to={this.props.match.path + '/popular'}>
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink to={this.props.match.path + '/top_rated'}>
              Top rated
            </NavLink>
          </li>
        </ul>
        <Route path={this.props.match.path + '/:category' } component={MovieList} />
      </div>
    )
  }
}
