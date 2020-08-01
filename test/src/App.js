import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/">
          
          </Route>
          <Route exact path="/">
            
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
