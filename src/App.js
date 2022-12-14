import logo from './logo.svg';
//import './ar.css';
import React, {useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';



import Users from './user/pages/User';
import Projects from './projects/pages/Projects';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import HomeHeader from './shared/components/Navigation/HomePageHeader';
import SingleHeader from './shared/components/Navigation/SinglePageHeader';
import AdminHeader from './shared/components/Navigation/AdminHeader';

import ProjectSingle from './projects/pages/single/projectSingle';
import Login from './login/login';
import Admin from './admin/login';
import AdminProjects from './admin/projects';
import AdminUpdateProjects from './admin/UpdateProject';
import AdminAddProjects from './admin/AddProject';


const App = () => {

  /*
  const queryParams = new URLSearchParams(window.location.search)
  const lang = queryParams.get("l")
  if( lang == null || lang !=='ar') {
    
  }
  */
  


  return <Router>
      
      
      <main>
      <Switch>

      <Route path="/projects" exact> 

       <Projects></Projects>
      </Route>

      <Route path="/login" exact> 
        <Login></Login>
      </Route>

      <Route path="/admin/login" exact> 
        <Admin></Admin>
      </Route>

      <Route path="/admin/projects" exact> 
      <AdminHeader />
        <AdminProjects></AdminProjects>
      </Route>

      <Route path="/admin/addproject" exact> 
      <AdminHeader />
        <AdminAddProjects></AdminAddProjects>
      </Route> 

      <Route path="/admin/update/:id" exact> 
      <AdminHeader />
        <AdminUpdateProjects></AdminUpdateProjects>
      </Route>

      <Route path="/project/:name/:id" exact >
        <SingleHeader/>
        <ProjectSingle></ProjectSingle>
      </Route>

      <Route path="/" exact>
      <HomeHeader/>
      <Projects></Projects>
      </Route>      

      </Switch>
      </main>


  </Router>;
}

export default App;
