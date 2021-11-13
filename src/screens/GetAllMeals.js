import React from 'react';
import { useEffect , useState} from "react"; 
import { View, Text, StyleSheet, ScrollView, TextView, Dimensions, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const GetAllMeals = () => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()  => {
        setTimeout(function getMeals() {
        fetch('http://192.168.0.8:5000/meals')
            .then((response) => response.json())
            .then((json) => setMeals(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, 1500)   
    }, []);
    
    return (
        <>         
            {loading ? <Text style={styles.loading}>Loading Meals...</Text> : meals.map((item) => (  
                <ScrollView contentConstainerStyle={styles.container}>
                        <Text style={styles.header}> { item.name } </Text> 
                        <Text style={styles.subHeader}> { item.category } </Text> 
                        <Image style={{width: 200, height: 200}} source={{uri: item.imgMeal[0]}}/>
                        <Text style={styles.body}> { item.todo } </Text>
                        <Text style={styles.body}> { item.calories } </Text>
                        <Text style={styles.body}> { item.allergens } </Text>
                        <Text style={styles.body}> { item.ingredients } </Text>
                </ScrollView>
            ))}      
       </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'yellow'
    },

    header: {
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
        backgroundColor: 'darkorange'
    },
    
    subHeader: {
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
        backgroundColor: 'goldenrod'
    },

    body: {
        textAlign: 'center',
        padding: 5,
        margin: 20,
        fontSize: 15,
    },

    loading: {
        fontSize: 35
    }
})

export default GetAllMeals;











// import React from 'react';
// import { useEffect , useState} from "react"; 
// import { SafeAreaView, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaSafeAreaView, View } from 'react-native';

// export default GetAllMeals = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
  
//     const getMovies = async () => {
//        try {
//         const response = await fetch('https://localhost:5000/meals');
//         const json = await response.json();
//         setData(json.meals);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }
  
//     useEffect(() => {
//       getMovies();
//     }, []);
  
//     return (
//       <View style={{ flex: 1, padding: 24 }}>
//         {isLoading ? <ActivityIndicator/> : (
//           <FlatList
//             data={data}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <Text>{item.name}, {item.category}, {item.todo}</Text>
//             )}
//           />
//         )}
//       </View>
//     );
//   };
