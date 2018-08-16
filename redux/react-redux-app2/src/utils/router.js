// this is used for quick mapping routes and links into components

import v4 from 'uuid/v4';

import Home from '../components/Home/Home';
import Profile from '../containers/ProfileContainer';
import News from '../containers/NewsContainer';
import Login from '../containers/Login';
import NotFound from '../components/NotFound/NotFound';

export const MainRoutes = [
  {
    id: v4(),
    path: '/',
    component: Home,
    exact: true
  },
  {
    id: v4(),
    path: '/profile',
    component: Profile,
    private: true
  },
  {
    id: v4(),
    path: '/news',
    component: News
  },
  {
    id: v4(),
    path: '/login',
    component: Login
  },
  {
    id: v4(),
    component: NotFound
  }
];

export const MainLinks = [
  {
    id: v4(),
    url: '/',
    text: 'Главная',
    exact: true
  },
  {
    id: v4(),
    url: '/profile',
    text: 'Профиль'
  },
  {
    id: v4(),
    url: '/news',
    text: 'Новости'
  }
];
