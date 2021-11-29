import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

const starRating = () => {
  const [defaultRating, setDefaultRating] = useState(2)
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

  const starImgFilled = '../forms/starFilled'
  const starImgUnfilled = '../forms/starUnfilled'

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                Style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgUnfilled }
                }
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView>
      <Text>Rate This Meal!</Text>
      <CustomRatingBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF00FF',
    width: 100,
    height: 50,
  },
  CustomRatingStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
})

export default starRating
