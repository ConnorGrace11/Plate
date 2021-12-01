 import React from 'react';
 import { useEffect , useState} from "react";
 import { View, Text, StyleSheet, ScrollView, TextView, Dimensions, Image, Button} from 'react-native';
 import { FlatList } from 'react-native-gesture-handler';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import axios from 'axios';
 import { useRoute } from '@react-navigation/native';
 import deviceStorage from '../api/token';
 import rating from './rating'

const GetAllRestaurants = ({navigation, route}) => {
    const [restaurantID, setRestaurantID] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

//143.198.25.164

    useEffect(()  => {
        setTimeout(function getMeals() {
        fetch('http://143.198.25.164:5000/restaurants')                                                    //192.168.1.214
            .then((response) => response.json())
            .then((json) => setRestaurants(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, 1500)
    }, []);

    return (

        <ScrollView>
            {loading ? <Text style={styles.loading}>Loading Restaurants...</Text> : restaurants.map((item) => (
                <View key={item._id} contentConstainerStyle={styles.container}>
                        <Text style={styles.header} onPress={() => {navigation.navigate('Items', {data: item._id})}}> { item.name } </Text>
                        <Image style={styles.image} source={{uri: item.imgRestaurant[0]}}/>
                        <Text style={styles.subHeader}> { item.location } </Text>
                        <Text style={styles.body}>Restaurant Rating: { item.rating }/5 </Text>
                </View>

            ))}
       </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'lightblue'
    },

    container2: {
        flex: 1,
        backgroundColor: '#87CEFA'
    },

    header: {
        textAlign: 'center',
        padding: 20,
        fontSize: 20,
        backgroundColor: '#00BFFF'
    },

    subHeader: {
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
        backgroundColor: 'lightblue'
    },

    body: {
        textAlign: 'center',
        padding: 5,
        margin: 20,
        marginBottom: 100,
        fontSize: 15,
    },

    loading: {
        fontSize: 35
    },

    image: {
      marginTop: 10,
      width: 200,
      height: 200,
    },
    inputView: {
      textAlign: 'center',
      backgroundColor: "#00BFFF",
      borderRadius: 30,
      width: "50%",
      height: 45,
      marginBottom: 10,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      backgroundColor: '#00BFFF',
      width: "50%",
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#00BFFF",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom: 10,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})

export default GetAllRestaurants;
