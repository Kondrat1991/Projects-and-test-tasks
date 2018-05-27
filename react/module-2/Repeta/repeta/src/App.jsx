import React, { Component } from 'react';
//import logo from './logo.svg';
import Nav from './components/Nav';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import './App.css';

const navLinks = [
    {
    path:'/',
    text:'home'
    },
    {
        path:'/about',
        text:'about'
    },
    {
        path:'/users',
        text:'users'
    }

    ];

class App extends Component {
  render() {
    return (
      <div className="App">


          <h1>My Task</h1>

          <Nav items={navLinks}/>



          <Switch>

              <Route exact path="/" render={()=> <h2>Homepage</h2>}/>,
          <Route path='/about' render={()=> <h2>About</h2>}/>
          <Route path="/users" render={()=> <h2>Users</h2>}/>
          <Redirect to="/"/>

          </Switch>

      </div>
    );
  }
}

export default App;
