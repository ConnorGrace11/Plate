import React from 'react';
import { useEffect , useState} from "react"; 
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import axios, { Axios } from 'axios';
import GetAllMeals from './GetAllMeals';

const mealURL = "http://localhost:5000/meals";

const HomeScreen = ({ navigation }) => {

  const GetAllMeals = () => {
    const [meals, setMeals] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(mealURL)
        .then((response) => response.json())
        .then(() => setMeals(data))
        .catch((error) => alert(error))
        .finally(setLoading(false));
    });
    return (
        <SafeAreaView>
            {loading ? (
            <ActivityIndicator />
            ) : ( <FlatList meals = {meals} keyExtractor = {({id}, index)=> id} 
            renderItem ={({ item }) => {
                <Text>
                    {item.name}
                    {item.category}
                    {item.todo}
                </Text>
            }
        }
            />)}
        </SafeAreaView>
    );
};
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button
        title="Go to Meals Screen"
        onPress={() => navigation.navigate('Meals')}
      />
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>

  );
};

export default HomeScreen;