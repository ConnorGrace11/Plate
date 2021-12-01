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
        fetch('http://192.168.1.214:5000/restaurants')                                                    //192.168.1.214
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
                        <Text style={styles.subHeader}> { item.location } </Text>
                        <Text style={styles.body}>Restaurant Rating: { item.rating }/5 </Text>
                        <Text style={styles.body} onPress={() => console.log(restaurantID)}>Restaurant ID: { item._id } </Text>
                        <Button title="See Items" onPress={() => navigation.navigate('Items', {data: 'hello'})}/>
                </View>

            ))}
       </ScrollView>
    )
    console.log(restaurantID)
    restaurantID
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
    },

    image: {
      marginTop: 10,
      width: 200,
      height: 200,
    },
})

export default GetAllRestaurants;
