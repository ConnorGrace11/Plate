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
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import rating from './rating'
const GetAllItems = ({ navigation, route }) => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(function getMeals() {
      fetch(
        'http://192.168.0.8:5000/restaurants/6179c52b1e4a49345028acc6/items',
      ) //192.168.1.214
        .then((response) => response.json())
        .then((json) => setRestaurants(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, 1500)
  }, [])

  return (
    <ScrollView>
      {loading ? (
        <Text style={styles.loading}>Loading Restaurants...</Text>
      ) : (
        restaurants.map((item) => (
          <View key={item._id} contentConstainerStyle={styles.container}>
            <Text style={styles.header}> {item.name} </Text>
            <Text style={styles.subHeader}> Restaurant ID: </Text>
            <Image style={styles.image} source={{ uri: item.imgMeal[0] }} />
            <Text style={styles.body}> Calories: {item.calories} </Text>
            <Text style={styles.body}> Allergens: {item.allergens[0]} </Text>
            <Text style={styles.body}> Ingredients: {item.ingredients}</Text>
            <Text style={styles.body}> Rating Count: {item.ratingCount} </Text>
            <Text style={styles.body}> Subcategory: {item.subCategory} </Text>
            <ImageBackground>
              <rating />
            </ImageBackground>
            <Text style={styles.body}> Description: {item.description} </Text>
          </View>
        ))
      )}
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
  image: {
    marginTop: 10,
    width: 200,
    height: 200,
  },
})
export default GetAllItems
