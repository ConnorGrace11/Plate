/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
<<<<<<< Updated upstream
} from 'react-native';
=======
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

import ProfileScreen from "./components/Profile"
import mainPage from "./components/mainPage";

const Stack = createNativeStackNavigator();
>>>>>>> Stashed changes

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
<<<<<<< Updated upstream
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="main" component={mainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/plate.png")} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.forgot_button} onPress={() => Alert.alert('That sucks.')}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('main')}>
        <Text style={styles.loginText}>LOGIN</Text> <Button></Button>
        </TouchableOpacity>
      </View>


>>>>>>> Stashed changes
  );
};

<<<<<<< Updated upstream
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.white : Colors.black,
          }}>
          <Section title="Step One">
            Edit HelloWorld! to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
=======
// function MoviesScreen() {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{flex: 1, padding: 24}, styles.inView}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList 
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//           <Text style = {styles.MovieInput}>{item.title}, {item.releaseYear}</Text> 
//           )}
//         />
//       )}
//     </View>
//   );
// }


{/* <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Overview' }}
/> */}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
>>>>>>> Stashed changes
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
<<<<<<< Updated upstream
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
=======

  inputView: {
    backgroundColor: "orange",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  inView: { // inside the movie you can adjust the full container the data is in 
    backgroundColor: "orange",
    borderRadius: 5,
    width: "100%",
    height: "100%",
    marginBottom: 20,

    alignItems: "center",
  },
  MovieInput: { // this is affecting the style of the text
    fontFamily: "TimesNewRoman",
    fontSize: 20,
    height: 20,
    flex: 0,
    padding: 0,
    marginBottom: 5,
    color: 'black',
    justifyContent: "center"
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'black'
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
>>>>>>> Stashed changes
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
