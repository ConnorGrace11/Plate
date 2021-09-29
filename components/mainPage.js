import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  FlatList,
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





function mainPage({ navigation }) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/plate.png")} />
      <Text>main Page</Text> 
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>Click to go to Profile</Text>
        </TouchableOpacity>
    </View> 
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    alignItems: "center",
  },
},
);

  export default mainPage