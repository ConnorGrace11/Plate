import "./App.css"
import LoginForm from './components/LoginForm';
import FormSignup from './components/FormSignup';
import AllMeals from './components/AllMeals';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MealPost from "./components/MealPost";
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <NavBar />
        <Switch>
          <Route exact path="/" component={AllMeals}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/signup" component={FormSignup}></Route>
          <Route path="/meals" component={MealPost}></Route>
          <Route path="/protected" component={Protected}></Route>
          {/* <Route path="/logout" component={LogOut}></Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
