import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  ScrollView, TextInput, Button, Image,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';





const profileScreen = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    axios.get("http://192.168.0.8:5000/api/auth/user/info")
    .then((response) => {
        setUsers(response.data)
        console.log(response.data)
        setLoading(true)
        })
        .catch((error) => {
            console.log(error.response.data)
            setErrorMessage(error.response.data.error)
            setLoading(false)
        })
    return (
        <>
    {loading ? <Text> Loading profile.. </Text> : users.map((item) => (  
        <ScrollView contentContainerStyle={styles.container}>
        <Text> { item.email } </Text> 
        </ScrollView>
    ))}
    </>
    );
}
export default profileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});