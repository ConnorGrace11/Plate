import "./App.css"
import LoginForm from './components/LoginForm';
import FormSignup from './components/FormSignup';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MealPost from "./components/MealPost";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/signup" component={FormSignup}></Route>
          <Route path="/meals" component={MealPost}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
