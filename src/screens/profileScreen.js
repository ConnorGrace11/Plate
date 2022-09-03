//Profile screen for users
import { StyleSheet, Image, Button, View, } from 'react-native'
import { Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const profileScreen = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    profile()
  }, [])

  const profile = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      const userProfile = await axios.get(
        'http://143.198.25.164:5000/api/auth/user/info',
        { headers: { Authorization: 'Bearer ' + value } },
      )
      setUsers([userProfile.data])
      setLoading(true)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      {loading &&
        users.map((item) => (
          <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
              <View style={styles.bodyContent}></View>
              <Text style={styles.name}> Email: {item.user.email} </Text>
              <Text style={styles.info}> Username: {item.user.username} </Text>
              <Text style={styles.description}> Role: {item.user.role} </Text>
            </View>
          </View>
        ))}
    </>
  )
}
export default profileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
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
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 22,
    color: "#696969",
    fontWeight: '600',
    alignItems: 'center',

  },
  body: {
    marginTop: 40,
    alignItems: 'center',
    color: 'lightblue'
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
})
