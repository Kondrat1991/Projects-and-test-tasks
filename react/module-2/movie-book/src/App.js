import React, { Component } from 'react';
import './App.css';
import Movies from'./components/Movies/Movies';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={() => <h2> Home </h2>} />
        <Route path='/movies' component={Movies}/>
        <Route path='/about' render={()=> <h2>About</h2>}/>
        <Route component={NotFound} />
      </Switch>
      </div>
    );
  }
}

export default App;
