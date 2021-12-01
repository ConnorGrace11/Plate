import * as React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import CreateAccountScreen from './src/screens/CreateAccountScreen'
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator, navigate } from 'react-navigation-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AdminHome from './src/screens/AdminHome'
import RandomMeals from './src/screens/RandomMeals'
import GetAllRestaurants from './src/screens/GetAllRestaurants'
import RandomItems from './src/screens/randomItems'
import mainScreen from './src/screens/mainScreen'
import profileScreen from './src/screens/profileScreen'
import rating from './src/screens/rating'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="mainPg" component={mainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Restaurants" component={GetAllRestaurants} />
        <Stack.Screen name="Profile" component={profileScreen} />
        <Stack.Screen name="Items" component={RandomItems} />
        <Stack.Screen name="Rating" component={rating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack









// const AppNavigator = createStackNavigator({
//   mainPg: {
//     screen: mainScreen,
//   },
//   Login: {
//     screen: LoginScreen,
//   },
//   Home: {
//     screen: HomeScreen,
//   },
//   CreateAccount: {
//     screen: CreateAccountScreen,
//   },
//   Adhome: {
//     screen: AdminHome,
//   },
//   Meals: {
//     screen: RandomMeals,
//   },
//   Restaurants: {
//     screen: GetAllRestaurants,
//   },
//   Profile: {
//     screen: profileScreen,
//   },
//   Items: {
//     screen: RandomItems,
//   },
//   rating: {
//     screen: rating,
//   },
// })

// export default createAppContainer(AppNavigator)
