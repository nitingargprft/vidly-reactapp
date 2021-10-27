import './App.css';
import React from 'react';
import Movies from './components/movies';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import { Route,Switch } from 'react-router-dom';


const App = () => {
  return (  <div className="container">
                <NavBar />
                <Switch>
                    <Route path="/Movies" component={Movies} />
                    <Route path="/login" component={LoginForm} />
                    
                </Switch>
            </div> );
}
 
export default App;