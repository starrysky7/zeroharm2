import React from 'react';
import { About } from './views/About';
import Nav from './components/nav/nav'
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from './views/Home/Home';

export const Routes = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/Home">
          <AboutPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};