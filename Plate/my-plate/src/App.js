import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Meals from './components/pages/Meals';
import Register from './components/pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
     <div className="App">
        <Router>
        <Navigation/>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/meals" component={Meals}></Route>
        <Route exact path="/register" component={Register}></Route>
        </Router>
    </div>
  );
}

export default App;
