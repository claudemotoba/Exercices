import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
