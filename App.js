import * as React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, navigate} from 'react-navigation-stack';
import _login from './src/screens/_login';
import AdminHome from './src/screens/AdminHome';
import RandomMeals from './src/screens/RandomMeals';
import RandomRestaurants from './src/screens/RandomRestaurants';
import mainScreen from './src/screens/mainScreen';

const AppNavigator = createStackNavigator(
    {
      mainPg: {
        screen: mainScreen,
      },
      Login: {
        screen: LoginScreen,
      },
      Home: {
        screen: HomeScreen,
      },
      CreateAccount: {
        screen: CreateAccountScreen,
      },
      _login: {
        screen: _login,
      },
      Adhome: {
        screen: AdminHome,
      },
      Meals: {
        screen: RandomMeals,
      },
      Restaurants: {
        screen: RandomRestaurants,
      },  
    },
  );
  // <Router>
  //       <Route exact path="./HomeScreen" component={Home}></Route>
  //       <Route exact path="/login" component={Login}></Route>
  //       <Route exact path="/meals" component={AllMeals}></Route>
  // </Router>

  export default createAppContainer(AppNavigator);
