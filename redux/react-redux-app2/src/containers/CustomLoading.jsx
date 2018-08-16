import React from 'react';
import { connect } from 'react-redux';
import { bool, string } from 'prop-types';

import Loading from '../components/Loading/Loading';
import {
  fetchingStateSelector,
  fechingTextSelector
} from '../state/actions/selectors';

// Container component for the Loading presentational one
// receives isFetching from the store and is rendered according to this value
// also receives the text param to show below the spinner, default - 'Loading...'

CustomLoading.propTypes = {
  isFetching: bool.isRequired,
  text: string
};

function CustomLoading({ isFetching, text = 'Loading...' }) {
  return isFetching && <Loading text={text} />;
}

const mapStateToProps = state => ({
  isFetching: fetchingStateSelector(state),
  text: fechingTextSelector(state)
});

export default connect(mapStateToProps)(CustomLoading);
