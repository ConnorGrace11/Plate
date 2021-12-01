import React from 'react';
import { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView, StyleSheet, ScrollView } from 'react-native';


const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loading} >Welcome to the Home Screen</Text>
      <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('Restaurants')}>
        <Text>Go to Restaurants Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text} onPress={() => navigation.navigate('Login')} >
        <Text>Back to log in</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00BFFF',

  },
  text: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 150,
    backgroundColor: '#00BFFF',
    borderRadius: 50,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
  },
  loading: {
    fontSize: 30,
  },
})
