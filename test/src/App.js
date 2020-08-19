import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Sketeton from './pages/Sketeton'
import Profils from './components/Profils/Profils'
import Profil from './components/Profils/Profil'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Profils/>
          </Route>
          <Route path="/profil">
            <Profil/>
          </Route>
          <Route path="/">
            
          </Route>
          <Route path="/">
            
          </Route>
          <Route path="/">
            
          </Route>
          <Route exact path="/">
            
          </Route>
          <Route path="/">
          
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
