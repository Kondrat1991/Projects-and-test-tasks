import { createSelector } from 'reselect';

import sortHelper from '../../utils/sortHelper';

// Functions for mapping state and computing some values

// isAuthenticated

export const stateAuthSelector = state => state.user.isAuthenticated;

// User data

export const loginErrorsSelector = state => state.user.fetchErr;
export const userIdSelector = state => state.user.id;

// Profile data

export const profileErrorSelector = state => state.profile.fetchErr;
export const profileSelector = state => state.profile.data;

// Sorted profile data with reselect

export const sortedProfile = createSelector(
  profileSelector,
  profile =>
    profile ? { ...profile, social: profile.social.sort(sortHelper) } : profile
);

// news data

export const newsErrorSelector = state => state.news.fetchErr;
export const newsSelector = state => state.news.data;

// info about fetching state - for preloader

export const fetchingStateSelector = state => state.fetching.isFetching;
export const fechingTextSelector = state => state.fetching.loadText;

// to count the amount of news

export const countNewsSelector = createSelector(
  newsSelector,
  news => (news ? news.length : 0)
);
