// example of redux store

export default {
  fetching: {
    loadText: 'Loading...',
    isFetching: false
  },
  user: {
    isAuthenticated: false,
    fetchErr: []
  },
  profile: {
    fetchErr: [],
    data: {}
  },
  news: {
    fetchErr: [],
    data: [{}]
  }
};
