import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';

import LogButton from '../../containers/LogButton';
import { MainRoutes, MainLinks } from '../../utils/router';
import CustomLoading from '../../containers/CustomLoading';
import withPrivates from '../../utils/withPrivates';
import './app.css';

const App = () => {
  const view = (
    <Switch>
      {MainRoutes.map(route => {
        const component = route.private
          ? withPrivates(route.component)
          : route.component;
        return (
          <Route
            key={route.id}
            path={route.path}
            component={component}
            exact={route.exact}
          />
        );
      })}
    </Switch>
  );

  const navigation = MainLinks.map(link => (
    <NavLink
      key={link.id}
      to={link.url}
      exact={link.exact}
      className="nav-flex__link"
      activeClassName="selected"
    >
      {link.text}
    </NavLink>
  ));

  return (
    <Router>
      <div className="mainApp">
        <nav className="nav-flex">
          {navigation}
          <LogButton />
        </nav>
        {view}
        <CustomLoading />
      </div>
    </Router>
  );
};

export default App;
