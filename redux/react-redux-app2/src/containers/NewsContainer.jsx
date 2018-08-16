import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, number, string } from 'prop-types';

import NewsView from '../components/NewsView/NewsView';
import { newsLoading } from '../state/actions/asyncAC';
import Error from '../components/Error/Error';
import {
  newsSelector,
  countNewsSelector,
  newsErrorSelector
} from '../state/actions/selectors';

// Container component for the NewsView presentational one
// receives fetchNews function, which makes a request to receive an array of news from the server
// receives news from the store, which is filtered by newsSelector (state/actions/selectors)
// receives amount of news value, which is calculated by a special selector (usage of reselect)
// receives err as an array of strings, which indicates errors to occur while executing a request

class NewsContainer extends Component {
  static propTypes = {
    fetchNews: func.isRequired,
    news: arrayOf(object),
    amount: number.isRequired,
    err: arrayOf(string)
  };

  static defaultProps = {
    news: [],
    err: []
  };

  componentDidMount() {
    const { fetchNews, news } = this.props;

    if (news.length) return;

    fetchNews();
  }

  render() {
    const { news, amount, err } = this.props;

    return err.length ? (
      <Error err={err} />
    ) : (
      <NewsView news={news} amount={amount} />
    );
  }
}

const mapStateToProps = state => ({
  news: newsSelector(state),
  err: newsErrorSelector(state),
  amount: countNewsSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => {
    dispatch(newsLoading());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
