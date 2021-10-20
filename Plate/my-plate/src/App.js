import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import AllMeals from './components/pages/AllMeals';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';
import AllRestaurants from './components/pages/AllRestaurants';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
     <div className="App">
        <Router>
        <Navigation/>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/meals" component={AllMeals}></Route>
        <Route exact path="/restaurants" component={AllRestaurants}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        </Router>
        <br></br>
        <Footer/>
    </div>
  );
}

export default App;
