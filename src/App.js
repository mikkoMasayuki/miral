import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/User';
import Projects from './projects/pages/Projects';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import ProjectSingle from './projects/pages/single/projectSingle';
import MapView from './maps/mapView';

const App = () => {

  
  return <Router>
      <MainNavigation />
      
      <main>
      <Switch>

      <Route path="/" exact> 
       <Projects></Projects>
      </Route>

      <Route path="/project/:id" exact >
        <ProjectSingle></ProjectSingle>
      </Route>

      <Route path="/map" exact>
        <MapView></MapView>
      </Route>

     



      <Redirect to="/"  />
      </Switch>
      </main>


  </Router>;
}

export default App;
