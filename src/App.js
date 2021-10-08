import './App.css';
import React from 'react';
import Movies from './components/movies';
import NavBar from './components/navBar';
import { Route,Switch } from 'react-router-dom';


const App = () => {
  return (  <div className="container">
                <NavBar />
                <Switch>
                    <Route path="/" component={Movies} />
                </Switch>
            </div> );
}
 
export default App;