import * as React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Adminlogin from './src/screens/Adminlogin';
import AdminHome from './src/screens/AdminHome';
import { useEffect , useState} from "react"; 
import RandomMeals from './src/screens/RandomMeals';


const AppNavigator = createStackNavigator(
    {
      Login: {
        screen: LoginScreen,
      },
      Home: {
        screen: HomeScreen,
      },
      CreateAccount: {
        screen: CreateAccountScreen,
      },
      Adminlogin: {
        screen: Adminlogin,
      },
      Adhome: {
        screen: AdminHome,
      },
      Meals: {
        screen: RandomMeals,
      },
    },
  );

  export default createAppContainer(AppNavigator);