import React from 'react'
import { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextView,
  Dimensions,
  Image,
  Button,
  Alert,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const GetAllMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(function getMeals() {
      fetch('http://172.16.224.93:5000/meals')
        .then((response) => response.json())
        .then((json) => setMeals(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, 1500)
  }, [])

  return (
    <ScrollView>
      {loading ? (
        <Text style={styles.loading}>Loading Meals...</Text>
      ) : (
        meals.map((item) => (
          <View key={item._id} contentConstainerStyle={styles.container}>
            <Text style={styles.header}> {item.name} </Text>
            <Text style={styles.subHeader}> {item.category} </Text>
            <Image style={styles.images} source={{ uri: item.imgMeal[0] }} />
            <Text style={styles.body}> {item.todo} </Text>
            <Text style={styles.body}> {item.calories} </Text>
            <Text style={styles.body}> {item.allergens} </Text>
            <Text style={styles.body}> {item.ingredients} </Text>
            <Button title="Add Review" />
          </View>
        ))
      )}
      <Button
        title="Back to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: 'yellow',
  },

  header: {
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
    backgroundColor: 'darkorange',
  },

  subHeader: {
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    backgroundColor: 'goldenrod',
  },

  body: {
    textAlign: 'center',
    padding: 5,
    margin: 20,
    fontSize: 15,
  },

  loading: {
    fontSize: 35,
  },
  images: {
    resizeMode: 'contain',
    alignContent: 'center',
    height: 200,
    width: 200,
    flex: 1,
    margin: 10,
  },
})

export default GetAllMeals

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
