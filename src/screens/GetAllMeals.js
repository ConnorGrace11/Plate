import React from 'react';
import { useEffect , useState} from "react"; 
import { View, Text, StyleSheet, ScrollView, TextView, Dimensions} from 'react-native';

const GetAllMeals = () => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()  => {
        setTimeout(function getMeals() {
        fetch('http://localhost:5000/meals')
            .then((response) => response.json())
            .then((json) => setMeals(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, 1500)   
    }, []);
    
    return (
        <>         
            {loading ? <Text style={styles.loading}>Loading Meals...</Text> : meals.map((item) => (  
                <View contentConstainerStyle={styles.container}>
                    <Text style={styles.header}> { item.name } </Text>
                    <Text style={styles.subHeader}> { item.category } </Text>  
                    <Text style={styles.body}> { item.todo } </Text> 
                </View>    
            ))}      
       </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
    },

    header: {
        textAlign: 'center',
        padding: 15,
        fontSize: 35,
    },
    
    subHeader: {
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
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