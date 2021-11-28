import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type Props = {}

export default class StarRating extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./star-filled.png')} />
        <Image style={styles.image} source={require('./star-filled.png')} />
        <Image style={styles.image} source={require('./star-filled.png')} />
        <Image style={styles.image} source={require('./star-filled.png')} />
        <Image style={styles.image} source={require('./star-filled.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF00FF',
    width: 100,
    height: 50,
  },
})
