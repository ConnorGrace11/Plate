import React from 'react';
import { useEffect , useState} from "react"; 
import { SafeAreaView, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaSafeAreaView, View } from 'react-native';

export default GetAllMeals = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
       try {
        const response = await fetch('https://192.168.0.7:5000/meals');
        const json = await response.json();
        setData(json.meals);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.name}, {item.category}, {item.todo}</Text>
            )}
          />
        )}
      </View>
    );
  };
// import axios, { Axios } from 'axios';

// const mealURL = "http://localhost:5000/meals";

// const GetAllMeals = () => {
//     const [meals, setMeals] = useState('');
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         fetch(mealURL)
//         .then((response) => response.json())
//         .then(() => setMeals(data))
//         .catch((error) => alert(error))
//         .finally(setLoading(false));
//     });
//     return (
//         <SafeAreaView>
//             {loading ? (
//             <ActivityIndicator />
//             ) : ( <FlatList meals = {meals} keyExtractor = {({id}, index)=> id} 
//             renderItem ={({ item }) => {
//                 <Text>
//                     {item.name}
//                     {item.category}
//                     {item.todo}
//                 </Text>
//             }
//         }
//             />)}
//         </SafeAreaView>
//     );
// };
            

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


// export default GetAllMeals;