import { StyleSheet } from 'react-native';
import { Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const profileScreen = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        profile()
    }, [])

    const profile = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        const userProfile = await axios.get("http://localhost:5000/api/auth/user/info", { headers: { Authorization: "Bearer " + value }} )
        setUsers([userProfile.data])
        setLoading(true)

      } catch (error) {
          console.log(error.message)
      }
    }
    
    return (
        <>
      {loading && users.map((item) => (  
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.menuItemText}> { item.user.email } </Text> 
            <Text style={styles.menuItemText}> { item.user.username } </Text> 
            <Text style={styles.menuItemText}> { item.user.role } </Text> 
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