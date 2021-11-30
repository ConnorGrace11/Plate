import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import AllMeals from './components/pages/AllMeals';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';
import AllRestaurants from './components/pages/AllRestaurants';
import Restaurant from './components/pages/Restaurants';
import Menu from './components/pages/Menu';
import Item from './components/pages/Item';
import Profile from './components/pages/Profile';
import Reviews from './components/pages/RatingPage';
import MapContainer from './components/pages/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
     <div className="App">
        <Router>
        <Navigation/>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/meals" component={AllMeals}></Route>
        <Route exact path="/restaurants" component={AllRestaurants}></Route>
        <Route exact path='/restaurants/:restaurantId' component={Restaurant}></Route>
        <Route exact path='/restaurants/:restaurantId/items' component={Menu}></Route>
        <Route exact path='/restaurants/:restaurantId/items/:itemId' component={Item}></Route> 
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/profile"/* /:id" */ component={Profile}></Route>
        <Route exact path="/map" component={MapContainer}></Route>
        <Route exact path="/reviews" component={Reviews}></Route>
        </Switch>
        </Router>
        <br></br>
        <Footer/>
    </div>
  );
}

export default App;
