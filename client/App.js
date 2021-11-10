import "./App.css"
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AllMeals from "./components/AllMeals";
import FormSignup from "./components/FormSignup";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/signup" component={FormSignup}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
