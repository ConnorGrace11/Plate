import * as React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import CreateAccountScreen from './src/screens/CreateAccountScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, navigate } from 'react-navigation-stack'
import AdminHome from './src/screens/AdminHome'
import RandomMeals from './src/screens/RandomMeals'
import GetAllRestaurants from './src/screens/GetAllRestaurants'
import RandomItems from './src/screens/randomItems'
import mainScreen from './src/screens/mainScreen'
import profileScreen from './src/screens/profileScreen'
import starRating from './src/screens/starRating'

const AppNavigator = createStackNavigator({
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
  Adhome: {
    screen: AdminHome,
  },
  Meals: {
    screen: RandomMeals,
  },
  Restaurants: {
    screen: GetAllRestaurants,
  },
  Profile: {
    screen: profileScreen,
  },
  Items: {
    screen: RandomItems,
  },
  starRating: {
    screen: starRating,
  },
})

export default createAppContainer(AppNavigator)
