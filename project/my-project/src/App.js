import React from 'react';
import Home from './components/Home';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Login from "./components/Login";
import Photos from "./components/Photos";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Router>
        <Navigation/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/photo" component={Photos}></Route>
        </Router>
      </div>   
  );
}

export default App;
