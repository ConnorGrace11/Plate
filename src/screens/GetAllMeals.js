import React from 'react';
import { useEffect , useState} from "react"; 
import { SafeAreaView, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaSafeAreaView } from 'react-native';
import axios, { Axios } from 'axios';

const mealURL = "http://localhost:5000/meals";

const GetAllMeals = () => {
    const [meals, setMeals] = useState('');
    const [loading, setLoading] = useState(true);
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
            

//             {loading && meals.map((item) => (
//                 <SafeAreaView>
//                     <Text >{ item.name }</Text>
//                     <Text >{ item.category }</Text>
//                     <Text >{ item.todo }</Text>   
//                 </SafeAreaView>
//             ))}      
//         </SafeAreaView>
//     )
// }


export default GetAllMeals;