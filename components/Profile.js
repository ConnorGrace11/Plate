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





function ProfileScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/Profile.png")} />
      <Text>ProfileScreen</Text> 
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
          <Text>click to go to main</Text>
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

  export default ProfileScreen