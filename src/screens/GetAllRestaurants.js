import React from 'react';
import { useEffect , useState} from "react";
import { View, Text, StyleSheet, ScrollView, TextView, Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



const GetAllRestaurants = ({navigation}) => {

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()  => {
        setTimeout(function getMeals() {
        fetch('http://192.168.0.8:5000/restaurants')                                                    //192.168.1.214
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
                        <Text style={styles.header} onPress={() => {navigation.navigate('Items')}}> { item.name } </Text>
                        <Text style={styles.subHeader}> { item.location } </Text>
                        <Text style={styles.body}>Restaurant Rating: { item.rating }/5 </Text>
                        <Text style={styles.body}>Restaurant ID: { item._id } </Text>    
                </View>
            ))}
       </ScrollView>
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
export default GetAllRestaurants;
