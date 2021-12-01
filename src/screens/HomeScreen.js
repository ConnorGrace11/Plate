import React from 'react';
import { useEffect , useState} from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import axios, { Axios } from 'axios';
import GetAllMeals from './GetAllMeals';

const HomeScreen = ({ navigation }) => {
  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);


  return (
    <SafeAreaView style={styles.container }>
      <Text style={styles.loading}>Welcome to the Home Screen</Text>
      <AppButton title="Restaurants" onPress={() => navigation.navigate('Restaurants')} size="sm" backgroundColor="#007bff" />
      <AppButton title="Profile" onPress={() => navigation.navigate('Profile')} size="sm" backgroundColor="#007bff" />
      <AppButton title="Back to Login" onPress={() => navigation.navigate('Login')} size="sm" backgroundColor="#007bff" />
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  loading: {
      fontSize: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
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

export default HomeScreen;
