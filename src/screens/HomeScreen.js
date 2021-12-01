import React from 'react';
import { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView, StyleSheet, ScrollView } from 'react-native';


const HomeScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
      <View>
        <Button style={styles.button}
          title="Go to Restaurants Screen"
          onPress={() => navigation.navigate('Restaurants')}
        />
      </View>
      <View>
        <Button
          title="Go to Profile Screen"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <View>
        <Button
          title="Back to log in"
          onPress={() => navigation.navigate('Login')}
        />
      </View>


    </ScrollView>

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
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
